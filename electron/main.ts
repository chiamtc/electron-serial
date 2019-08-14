import Serialize from "./classes/Serialize";

const electron = require('electron');
const _ = require('lodash');
const path = require('path')
const {app, BrowserWindow, ipcMain, shell, TouchBar, nativeImage} = electron;

import SerialCommunication from './classes/SerialCommunication';
import SerialComm_Constant from "./constants/SerialComm_Constant";
import * as SerialPort from 'serialport';
import Stethee from './models/Stethee';
import SerialCommStore from "./classes/SerialCommStore";
import StateOfOperation from "./classes/StateOfOperation";

const ByteLength = require('@serialport/parser-byte-length')
const Readline = require('@serialport/parser-readline')
let mainWindow: any;
const record = require('node-record-lpcm16');
//const portAudio = require('naudiodon');
const fs = require('fs');
// const AudioRecorder = require('node-audiorecorder');
const AudioRecorder = require('./AudioRecorder');
const cmd = require('node-cmd');
const createBuffer = require('audio-buffer-from')
const convert = require('pcm-convert')
const sox = require('sox-stream');
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegrations:true,
            backgroundThrottling: false
        }
    });

    // mainWindow.loadURL(`http://localhost:9001/`); //load the react web app
    mainWindow.loadURL(`file://${__dirname}/../electron/index.html`);
    mainWindow.openDevTools();
    //mainWindow.loadURL(`file://${__dirname}/src/index.html`); //not useful
    // Ultimate working one
    mainWindow.webContents.on('did-finish-load', () => {
        cmd.get('./electron/system/Audiodevice/audiodevice input list', (err: any, data: any, stderr: any) => {
            const a = data.split('\n')
            let finalData = [];
            for (const b of a) {
                if (b !== '') finalData.push(b);
            }
            //console.log('data', data);
            console.log(finalData);
            mainWindow.webContents.send('SCR:list', finalData);
            /*
            data =
            input: Internal Microphone
            output: Internal Speakers
            system: Internal Speakers
            and potentially to do it on UI
             */
            console.log('std', stderr)
            console.log('err', err)
        });

    })
    ipcMain.on('SRC:select-new-input', (event: any, data: any) => {

        //const p = path.join(__dirname, '../electron/system/Audiodevice/audiodevice')
        const p = './electron/system/Audiodevice/audiodevice';
        console.log('p', `${p} input '${data}'`)
        cmd.run(`${p} input '${data}'`);
    })


    /*ipcMain.on('SRC:record', (event: any, data: any) => {
        if (data) {
            var file = fs.createWriteStream('test.wav', {encoding: 'binary'})
            record.start({
                sampleRate: 44100,
                verbose: true,
                silence: 0.5,
                channel: 1
                //recordProgram: 'rec',
                //device: 'Built-in Microphone'
            }).on('data', function (data: any) {
                console.log('data', data)
                mainWindow.webContents.send('SCR:read-audio-buffer', data);
            }).pipe(file);
            setTimeout(() => {
                record.stop();
                console.log("three seconds is up!")
            }, 3000)
        }
    })*/
    function convertBlock(incomingData: any): any { // incoming data is a UInt8Array
        var i, l = incomingData.length;
        var outputData = new Float32Array(incomingData.length);
        for (i = 0; i < l; i++) {
            outputData[i] = (incomingData[i] - 128) / 128.0;
        }
        return outputData;
    }

    //recording works #2 https://github.com/RedKenrok/node-audiorecorder
    ipcMain.on('SRC:record', (event: any, data: any) => {
        if (data) {
            //configuration settings in this "options" variable is preventing recording.
            const options = {
                program: `sox`,     // Which program to use, either `arecord`, `rec`, or `sox`.
                device: 'MacBook Pro Microphone',       //-d // Recording device to use.

                bits: 16,           //-b // Sample size. (only for `rec` and `sox`)
                channels: 1,        //-c // Channel count.
                encoding: `signed-integer`,  //-e // Encoding type. (only for `rec` and `sox`)
                format: `S16_LE`,   // Encoding type. (only for `arecord`)
                rate: 16000,        //-r // Sample rate.
                type: `wav`,        // Format type.

                // Following options only available when using `rec` or `sox`.
                silence: 0,         // Duration of silence in seconds before it stops recording.
                thresholdStart: 0.5,  // Silence threshold to start recording.
                thresholdStop: 0.5,   // Silence threshold to stop recording.
                keepSilence: true   // Keep the silence in the recording.
            };

            // Optional parameter intended for debugging.
            // The object has to implement a log and warn function.
            const logger = console;

            let audioRecorder = new AudioRecorder({
                program:`sox`,
                device:'MacBook Pro Microphone',
                channels:1,
                bits:64,
                encoding : `floating-point`,
                rate: 44100,
                buffer:512,
                silence: 0,

            }, logger);
            const fileStream = fs.createWriteStream('rec.wav');

            audioRecorder.start().stream().pipe(fileStream);
            audioRecorder.stream().on('data', (code: any) => {
                console.log(typeof(code));
                let float32arr = convert(code, 'uint8', 'float32');
                const buf = createBuffer(float32arr);
                //console.log('code',code)
               // console.log('buf',buf);
                mainWindow.webContents.send('SCR:audio-buffer', code);
            });

            // Log information on the following events
            setTimeout(() => {
                audioRecorder.stop();
            }, 1000);
            audioRecorder.stream().on(`close`, function (code: any) {
                console.warn(`Recording closed. Exit code: `, code);
            });
            audioRecorder.stream().on(`end`, function () {
                console.warn(`Recording ended.`);
            });
            audioRecorder.stream().on(`error`, function () {
                console.warn(`Recording error.`);
            });
        }
    })

    //* CURRENT serial port working
    console.log('scanning ports...')
    /**
     * TODO: actual flow
     *  1. let stethee:Stethee; , instantiate actual stethee classs object after user selects the port
     */
    let stethee: Stethee = new Stethee();
    SerialPort.list((err: any, ports: Array<SerialPort>) => {
        if (err) {
            console.log('error on scanning serial ports')
        }
        console.log('ports', ports)
        /**
         * TODO:
         *  1. Depending on Naeim's implementation on bluetooth on the usb dongle, scan seialport or bluetooth ports, send those ports to ipcRenderer.webContents, let user pick the actual bluetooth ports
         2. ipcMain.on('SRC:user-pick-BT', ()=>{...}
         3. instantiate "let stethee:Stethee"
         4. instantiate SerialCommunication class object.
         */
    });

    const state: SerialCommStore = new SerialCommStore();
    const stateOfOps: StateOfOperation = new StateOfOperation();
    const serialComm = new SerialCommunication('/dev/tty.SLAB_USBtoUART', {
        baudRate: SerialComm_Constant.BAUDRATE,
        autoOpen: true,
    }, mainWindow, state, stethee, stateOfOps);

    serialComm.read().then((data: Buffer) => {
        console.log('data', data)
    }).catch((err: any) => {
        console.log('err', err);
    });

    ipcMain.on(SerialComm_Constant.GET_OPS, (event: any, data: any) => {
        console.log('data', data)
        state.convertGetSerialComm(data);
        console.log('fullHex', state.getBuffer());
        serialComm.write(SerialComm_Constant.GET, state.getBuffer()).then((res: any) => {
            console.log('get res', res)
        })
    });
    ipcMain.on(SerialComm_Constant.SET_OPS, (event: any, data: any) => { //data suppose to be human readable string
        console.log('data.ops', data.ops, data.value);
        state.convertSetSerialComm(data.ops, data.value);
        console.log('fullHex', state.getBuffer());
        serialComm.write(SerialComm_Constant.SET, state.getBuffer()).then((res: any) => {
            console.log('res', res)
        })
    })
    //=====


    /*SerialPort.list((err,ports)=>{
        console.log('err',err)
        console.log('ports',ports)
    })*/

    //WORKS 1.) naudiodon FIRST STEP TO DO UI ONLY

    //console.log(portAudio.getDevices());
    //console.log(portAudio.getHostAPIs());

    // Create a write stream to write out to a raw audio file
    /*var ws = fs.createWriteStream('rawAudio2.wav');

    var ai = new portAudio.AudioIO({
        inOptions: {
            channelCount: 1,
            sampleFormat: portAudio.SampleFormat16Bit,
            sampleRate: 44100,
            deviceId: -1 // Use -1 or omit the deviceId to select the default device
        }
    });
    console.log('ai',ai)
    //Start streaming
    ai.pipe(ws);
    ai.start();*/


    //======


    /* WORKS 2.) SWITCH USING THIS SCRIPT TO GET device NAME from STEP 1
    switch audio device for OSX
    https://github.com/deweller/switchaudio-osx
    //get it from  =>> /usr/local/Cellar/switchaudio-osx/1.0.0
    command -
    SwitchAudioSource -t output -s '[STU] Sethee USB Bridge'
    SwitchAudioSource -t input -s '[STU] Sethee USB Bridge'
     */

    // ======

    /* WORKS 2.1) Audiodevice

    http://whoshacks.blogspot.com/2009/01/change-audio-devices-via-shell-script.html
    downloaded in => built ->>> ~/Downloads/Audiodevice
                    => source ->>> ~/Downloads/audiodevice same as Audiodevice
    ./audiodevice to list
    ./audiodevice input/output '<name of speakres'
    >>>> ./audiodevice\ 2/build/Release/audiodevice output list
                Internal Speakers
                [STU] Sethee USB Bridge
    >>>> ./audiodevice\ 2/build/Release/audiodevice input list
                Internal Microphone
                [STU] Sethee USB Bridge
     */

    //WORKS - 3.) node-record-lpcm-16 - THEN STREAM IT (by here, it should be default/selected device
    /*var file = fs.createWriteStream('aa.wav', {encoding: 'binary'})

    record.start({
        sampleRate: 44100,
        verbose: true,
        silence:0.5,
        recordProgram:'sox',
        //device: 'Built-in Microphone'
    }).pipe(file);*/

    //======

    //node-cmd
    /* cmd.run('sox -d test.wav',(err:any, data:any, stderr:any)=>{
         console.log('data',data)
         console.log('data',stderr)
         console.log('data',err)
     })*/

    //===


    //NOT WORK node-audiorecorder
    /*     const options = {
             program: `sox`,     // Which program to use, either `arecord`, `rec`, or `sox`.
             device: 'Internal Microphone',       // Recording device to use.

             bits: 16,           // Sample size. (only for `rec` and `sox`)
             channels: 1,        // Channel count.
             encoding: `signed-integer`,  // Encoding type. (only for `rec` and `sox`)
             format: `S16_LE`,   // Encoding type. (only for `arecord`)
             rate: 16000,        // Sample rate.
             type: `wav`,        // Format type.

             // Following options only available when using `rec` or `sox`.
             silence: 2,         // Duration of silence in seconds before it stops recording.
             thresholdStart: 0.5,  // Silence threshold to start recording.
             thresholdStop: 0.5,   // Silence threshold to stop recording.
             keepSilence: true   // Keep the silence in the recording.
         };
         // Optional parameter intended for debugging.
         // The object has to implement a log and warn function.
         const logger = console;

         // Create an instance.

         const fileStream = fs.createWriteStream('test2.wav', { encoding: `binary` });
         let audioRecorder = new AudioRecorder(options, logger);

         audioRecorder.start().stream().pipe(fileStream);

     // Log information on the following events
         audioRecorder.stream().on(`close`, function(code:any) {
             console.warn(`Recording closed. Exit code: `, code);
         });
         audioRecorder.stream().on(`end`, function() {
             console.warn(`Recording ended.`);
         });
         audioRecorder.stream().on(`error`, function() {
             console.warn(`Recording error.`);
         });

        process.stdin.resume();
        console.warn(`Press ctrl+c to exit.`);*/
    //=======


    //=====

    /* const port = new SerialPort('/dev/tty.SLAB_USBtoUART', {
        baudRate: 9600,
        autoOpen: true
    });


    port.write('abcd', function (err: any) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log('message written')
    })

    port.on('open', function () {
        console.log('opened port')
    });

    const sr = new Serializer();

    port.on('data', function (data: any) {
        sr.serialize(data);
    })

    port.on('end', function () {
        console.log('ended')
    })*/


    /*port.write('main screen turn on', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log('message written')
        // })

        port.on('data', function (data) {

            console.log(data)
        })

// Open errors will be emitted as an error event
        port.on('error', function (err) {
            console.log('Error: ', err.message)
        })
    });*/

    /* Promisify it
        function init (){
            return new Promise((resolve,reject)=>{
                port.on('data', function(data){
                    resolve(data);
                })

                port.on('error',function(error){
                    reject(error);
                });
            });
        }
     */
    //=====


    /*
    1. find usb device
    2. open() the device
    3. find the interface of the opened device and claim it.
    4. use "IN" / "OUT" endpoints from claimed endpoints to do operation using transfer()
     */
    /*console.log(usb.getDeviceList())
    let device = usb.findByIds('4292','60000');
    console.log('device',device)
    device.open();
    var devInterface = device.interface(0);
    devInterface .claim();
    var endpoints = devInterface.endpoints;
    var outpoint = endpoints[1];
    var inpoint = endpoints[0];

    inpoint.startPoll(1,64);
    inpoint.on('data', (data)=>{
        console.log('data',data)
    });

    inpoint.on('error', function(err){
      console.log('err?',err)
    })

    inpoint.on('end',function(){
        console.log('ended')
    })
*/
    /*  var buf = new Buffer.from([0xFF, 0x12, 0x01]);
      outpoint.transfer(buf, function(error) {
         console.log('error', error)

      })

      outpoint.on('error', function(err){
          console.log('err',err)
      })

      outpoint.on('end', function(){
          console.log('end')
      })*/
});


// Touchbar
/*const {TouchBarLabel, TouchBarButton, TouchBarSpacer, TouchBarSegmentedControl, TouchBarGroup, TouchBarSlider, TouchBarColorPicker, TouchBarPopover, TouchBarScrubber} = TouchBar
let spinning = false

// Reel labels
const reel1 = new TouchBarLabel();
const reel2 = new TouchBarLabel();
const reel3 = new TouchBarLabel();
const reel4 = new TouchBarLabel();
reel4.label = 'Hello world label';
// Spin result label
const result = new TouchBarLabel();
const tbColorPicker = new TouchBarColorPicker();

const tbItem = new TouchBarLabel();
const tbItem2 = new TouchBarButton({
    label: 'this is popover button'
});
tbItem.label = 'asd';
const popoverObj = {
    //icon:__dirname+'/../electron/icon.png',
    icon: __dirname + '/icon.png',
    items: [tbItem, tbItem2],
    showCloseButton: true
}

const tbPopover = new TouchBarPopover(popoverObj);

const tbScrub = new TouchBarLabel();
tbScrub.label = 'scrub1'
const tbScrub2 = new TouchBarLabel();
tbScrub2.label = 'scrub2'
const tbScrub3 = new TouchBarLabel();
tbScrub3.label = 'scrub3'
const tbScrubber = new TouchBarScrubber({
    showArrowButtons: true,
    continuous: true,
    overlayStyle: 'outline',
    items: [
        tbScrub,
        tbScrub2,
        tbScrub3
    ]
});

const tbSlider = new TouchBarSlider({
    label:'gain',
    value:2,
    minValue:0,
    maxValue:100,
});
// Spin button
const spin = new TouchBarButton({
    label: '🎰 Spin',
    backgroundColor: '#7851A9',
    click: () => {
        // Ignore clicks if already spinning
        if (spinning) {
            return
        }

        spinning = true
        result.label = ''

        let timeout = 10
        const spinLength = 4 * 1000 // 4 seconds
        const startTime = Date.now()

        const spinReels = () => {
            updateReels()

            if ((Date.now() - startTime) >= spinLength) {
                finishSpin()
            } else {
                // Slow down a bit on each spin
                timeout *= 1.1
                setTimeout(spinReels, timeout)
            }
        }

        spinReels()
    }
})

const getRandomValue = () => {
    const values = ['🍒', '💎', '7️⃣', '🍊', '🔔', '⭐', '🍇', '🍀']
    return values[Math.floor(Math.random() * values.length)]
}

const updateReels = () => {
    reel1.label = getRandomValue()
    reel2.label = getRandomValue()
    reel3.label = getRandomValue()
}

const finishSpin = () => {
    const uniqueValues = new Set([reel1.label, reel2.label, reel3.label]).size
    if (uniqueValues === 1) {
        // All 3 values are the same
        result.label = '💰 Jackpot!'
        result.textColor = '#FDFF00'
    } else if (uniqueValues === 2) {
        // 2 values are the same
        result.label = '😍 Winner!'
        result.textColor = '#FDFF00'
    } else {
        // No values are the same
        result.label = '🙁 Spin Again'
        result.textColor = null
    }
    spinning = false
}

const tbGroup = new TouchBarGroup({
    items:[spin,reel1,reel2,
        reel3,
        result,]
})

const tbSeg = new TouchBarSegmentedControl({
    segmentStyle:'rounded',
    mode:'buttons',
    segments:[spin,reel4]
})

const touchBar = new TouchBar([
    spin,reel1,reel2,
    reel3,
    result,
    //tbSeg,
    //tbColorPicker,
    tbPopover,
    tbScrubber,
    tbSlider
])*/
//end touchbar
