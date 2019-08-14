import SerialCommunicationInterface from "../interfaces/SerialCommunication.interface";
import Serialize from './Serialize';
import SerialCommUtil from "../utils/SerialCommUtil";
import Queue from '../utils/Queue';
import * as SerialPort from 'serialport';
import SerialCommConstant from '../constants/SerialComm_Constant';
import Stethee from '../models/Stethee';
import SerialCommStore from "./SerialCommStore";
import StateOfOperation from "./StateOfOperation";
const ByteLength = require('@serialport/parser-byte-length');

export default class SerialCommunication implements SerialCommunicationInterface {
    serialPort: SerialPort;
    parser: any;
    stethee: Stethee;
    serialize: Serialize;
    mainWindow: any;
    state: SerialCommStore;
    stateOfOps: StateOfOperation;
    ports: Array<SerialPort>;
    scu: SerialCommUtil;

    constructor(path: string, options: object, mainWindow: any,  state: SerialCommStore, stethee: Stethee, stateOfOps:StateOfOperation) {
        this.serialPort = new SerialPort(path, options);
        this.parser = new ByteLength({length: 1});
        this.serialPort.pipe(this.parser);
        this.stethee = stethee;
        this.mainWindow = mainWindow;
        this.state = state;
        this.stateOfOps = stateOfOps;
    }

    public listPorts() {
        return new Promise((resolve, reject) => {
            SerialPort.list((err: any, ports: Array<SerialPort>) => {
                if (err) reject(err);
                this.ports = ports;
                resolve(ports);
            })
        })
    }

    public getSerialPort() {
        return this.serialPort;
    }

    public checkOpenPort(): Promise<any> {
        return new Promise((resolve, reject) => this.serialPort.on('open', () => resolve(true)));
    }

    //read as buffer and always open until user disconnects usb/bt or unexpected error
    public read(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.scu = new SerialCommUtil();
            let readQ: Queue<any> = new Queue<any>();
            this.parser.on('data', (data: any) => {
                //store buffer to queue of string 'HEX_CODE'
                const hexCode = this.scu.bufferToHex(data);
                readQ.append(hexCode);
                //check endbyte
                if (readQ.tailVal.toUpperCase() === SerialCommConstant.ENDBYTE_HEX) {
                    const end_arr = readQ.last(2);
                    //check actual endbyte
                    if (end_arr.join('').toUpperCase() === `${SerialCommConstant.CHECKSUM_HEX}${SerialCommConstant.ENDBYTE_HEX}`) {
                        //start serializing
                        this.serialize = new Serialize(readQ, this.state, this.stethee, this.stateOfOps);
                        const sr = this.serialize.serialize();
                        //then return stethee model to webContents
                        this.mainWindow.webContents.send('SCR:read-comm', sr);
                        readQ = new Queue<any>();  //TODO: works but does it max out the memory ?
                    }
                }
            })
        });
        /**
         * TODO:
         1. I should resolve() when it has button or something in the future.
         Right now, when electron app launches and stay launching state.
         */
    }

    //input as binary according to page 3
    //write as hex to bluetility or Stethee
    public write(operation: string, param: Buffer): Promise<any> {

        switch (operation) {
            case SerialCommConstant.GET:
                return new Promise((resolve, reject) => {
                    this.serialPort.write(param)
                });
            case SerialCommConstant.SET:
                return new Promise((resolve, reject) => {
                    this.serialPort.write(param);
                });
            case SerialCommConstant.EVENT:
                //Invalid ops for write()
                break;
        }
    }

}
