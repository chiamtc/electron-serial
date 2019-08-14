import SerialCommUtil from '../utils/SerialCommUtil'
import SerialComm_Constant from '../constants/SerialComm_Constant'
import Stethee from "../models/Stethee";

export default class StateOfOperation {
    firstByte_hex: string;
    secondByte_hex: string;
    util: SerialCommUtil;

    //not sure if I need this but just in case
    private state: string;

    //first byte which is streaming
    private recordTimeout: string;

    //first byte which is on
    private battery: number;
    private headset: boolean;
    private auto_connect: number;
    private firstByteRes: object;

    private filter_pos: number;
    private filter_status: boolean;
    private audio_gain: number;
    private heart_beat_locator: boolean;
    private secondByteRes: object;

    stethee: Stethee;

    //state of operation should only receive the value, which is in []= fe 46/86 [4a af] 0d0a
    //therefore, pre-process before instantiate SoO class model, Serializer.get and .set have differnet approach
    constructor() { //expecting 2 bytes 0x4a 0xaf
        this.util = new SerialCommUtil();
    }

    convertStateOfOperation(value: string, stethee: Stethee): void {
        this.stethee = stethee;
        if(value.length===4) {
            this.firstByte_hex = value.substring(0, 2);
            this.secondByte_hex = value.substring(2);
            this.handleFirstByte();
            this.handleSecondByte();
        }else{
            this.firstByte_hex = value.substring(0, 2);
            this.handleFirstByte();
        }

    }

    handleFirstByte() {
        const state = this.processState(SerialComm_Constant.BIN_C0, SerialComm_Constant.POS_C0);
        let battery, hd, ac;
        switch (state) {
            case SerialComm_Constant.OFF: //OFF
            case SerialComm_Constant.ON: //ON
                battery = this.processBatteryLevel(SerialComm_Constant.BIN_3C, SerialComm_Constant.POS_3C);
                hd = this.processHD(SerialComm_Constant.BIN_02, SerialComm_Constant.POS_02);
                ac = this.processAC(SerialComm_Constant.BIN_01, SerialComm_Constant.POS_01);
                this.setFirstByte(state, battery, hd, ac);
                break;
            case SerialComm_Constant.STR://STR
                const recordTimeout = this.processRecordTimeout(SerialComm_Constant.BIN_3F, SerialComm_Constant.POS_3F);
                this.setRecordFirstByte(state, recordTimeout);
                break;
            case SerialComm_Constant.CHG://CHG
                battery = this.processBatteryLevel(SerialComm_Constant.BIN_3C, SerialComm_Constant.POS_3C);
                hd = this.processHD(SerialComm_Constant.BIN_02, SerialComm_Constant.POS_02);
                ac = this.processAC(SerialComm_Constant.BIN_01, SerialComm_Constant.POS_01);
                this.setFirstByte(state, battery, hd, ac);
                break;
        }
    }

    setRecordFirstByte(state: string, recordTimeout: string) {
        this.state = state;
        this.recordTimeout = recordTimeout;
        this.firstByteRes = {
            state: state,
            recordTimeout: recordTimeout
        };
        this.stethee.operationState = state;
        this.stethee.recordTimeout = recordTimeout;
    }

    setFirstByte(state: string, battery?: number, hd?: boolean, ac?: number) {
        this.state = state;
        this.battery = battery;
        this.headset = hd;
        this.auto_connect = ac;
        this.firstByteRes = {
            state: state,
            battery: battery, //number
            headset: hd,
            autoConnect: ac //number
        };
        this.stethee.operationState = state;
        this.stethee.batteryLevel = battery.toString();
        this.stethee.headsetConnected = hd ? SerialComm_Constant.HEADSET_CONNECTED : SerialComm_Constant.HEADSET_DISCONNECTED;
        this.stethee.isHeadsetConnected = hd;
        this.stethee.autoConnect = ac === 1;
    }

    processState(bitComparison: string, shiftingPosition: number): string {
        const stateValue = this.util.andAndShiftOperation(this.util.stringToBinary(this.firstByte_hex), bitComparison, shiftingPosition);
        switch (stateValue) {
            case SerialComm_Constant.STATE_OFF:
                return SerialComm_Constant.OFF;
            case SerialComm_Constant.STATE_ON:
                return SerialComm_Constant.ON;
            case SerialComm_Constant.STATE_STR:
                return SerialComm_Constant.STR;
            case SerialComm_Constant.STATE_CHG:
                return SerialComm_Constant.CHG;
        }
    }

    processRecordTimeout(bitComparison: string, shiftingPosition: number): string {
        //multiply by 2 just for Stethee class model object for react web app
        return (this.util.andAndShiftOperation(this.util.stringToBinary(this.firstByte_hex), bitComparison, shiftingPosition) * 2).toString();
    }

    processBatteryLevel(bitComparison: string, shiftingPosition: number): number {
        const batteryValue = this.util.andAndShiftOperation(this.util.stringToBinary(this.firstByte_hex), bitComparison, shiftingPosition);
        switch (batteryValue) {
            case SerialComm_Constant.BATTERY_INDEX_NODATA:
                return SerialComm_Constant.BATTERY_LVL_NODATA;
            case SerialComm_Constant.BATTERY_INDEX_ONE:
                return SerialComm_Constant.BATTERY_LVL_ONE;
            case SerialComm_Constant.BATTERY_INDEX_TWO:
                return SerialComm_Constant.BATTERY_LVL_TWO;
            case SerialComm_Constant.BATTERY_INDEX_FIVE:
                return SerialComm_Constant.BATTERY_LVL_FIVE;
            case SerialComm_Constant.BATTERY_INDEX_TEN:
                return SerialComm_Constant.BATTERY_LVL_TEN;
            case SerialComm_Constant.BATTERY_INDEX_FIFTEEN:
                return SerialComm_Constant.BATTERY_LVL_FIFTEEN;
            case SerialComm_Constant.BATTERY_INDEX_TWENTY:
                return SerialComm_Constant.BATTERY_LVL_TWENTY;
            case SerialComm_Constant.BATTERY_INDEX_TWENTY_FIVE:
                return SerialComm_Constant.BATTERY_LVL_TWENTY_FIVE;
            case SerialComm_Constant.BATTERY_INDEX_THIRTY:
                return SerialComm_Constant.BATTERY_LVL_THIRTY;
            case SerialComm_Constant.BATTERY_INDEX_FORTY:
                return SerialComm_Constant.BATTERY_LVL_FORTY;
            case SerialComm_Constant.BATTERY_INDEX_FIFTY:
                return SerialComm_Constant.BATTERY_LVL_FIFTY;
            case SerialComm_Constant.BATTERY_INDEX_SIXTY:
                return SerialComm_Constant.BATTERY_LVL_SIXTY;
            case SerialComm_Constant.BATTERY_INDEX_SEVENTY:
                return SerialComm_Constant.BATTERY_LVL_SEVENTY;
            case SerialComm_Constant.BATTERY_INDEX_EIGHTY:
                return SerialComm_Constant.BATTERY_LVL_EIGHTY;
            case SerialComm_Constant.BATTERY_INDEX_NINTY:
                return SerialComm_Constant.BATTERY_LVL_NINTY;
            case SerialComm_Constant.BATTERY_INDEX_HUNDRED:
                return SerialComm_Constant.BATTERY_LVL_HUNDRED;
            default: //shouldn't happen
                return -1;
        }
    }

    processHD(bitComparison: string, shiftingPosition: number): boolean {
        const hdValue = this.util.andAndShiftOperation(this.util.stringToBinary(this.firstByte_hex), bitComparison, shiftingPosition);
        return hdValue === 1;
    }

    processAC(bitComparison: string, shiftingPosition: number): number {
        return this.util.andAndShiftOperation(this.util.stringToBinary(this.firstByte_hex), bitComparison, shiftingPosition);
    }

    handleSecondByte() {
        // { _ _ _ = Filter number} { _ = FS} { _ _ _ = Audio gain} { _ HBL}
        const filter_pos = this.processFilterPos(SerialComm_Constant.BIN_E0, SerialComm_Constant.POS_E0);
        const filter_status = this.processFilterStatus(SerialComm_Constant.BIN_10, SerialComm_Constant.POS_10);
        const audio_gain = this.processAudioGain(SerialComm_Constant.BIN_0E, SerialComm_Constant.POS_0E);
        const hbl = this.processHeartBeatLocator(SerialComm_Constant.BIN_01, SerialComm_Constant.POS_01);
        this.setSecondByte(filter_pos, filter_status, audio_gain, hbl);
    }

    setSecondByte(filter_pos: number, filter_status: boolean, audio_gain: number, hbl: boolean) {
        this.filter_pos = filter_pos;
        this.filter_status = filter_status;
        this.audio_gain = audio_gain;
        this.heart_beat_locator = hbl;
        this.secondByteRes = {
            filter_pos: filter_pos, //number
            filter_status: filter_status, //number
            audio_gain: audio_gain, //number
            heart_beat_locator: hbl //number
        }
        this.stethee.audioGain = audio_gain;
        this.stethee.filterPosition = filter_pos; //number, then get actual filter from stethee.filterPositions
        this.stethee.filterStatus = filter_status;
        this.stethee.heartBeatLocator = hbl;
        this.stethee.isHeartBeatLocatorActive = hbl;
    }

    processFilterPos(bitComparison: string, shiftingPosition: number): number {
        return this.util.andAndShiftOperation(this.util.stringToBinary(this.secondByte_hex), bitComparison, shiftingPosition); //returns index position starts from 0
    }

    processFilterStatus(bitComparison: string, shiftingPosition: number): boolean {
        return this.util.andAndShiftOperation(this.util.stringToBinary(this.secondByte_hex), bitComparison, shiftingPosition) === 1;
    }

    processAudioGain(bitComparison: string, shiftingPosition: number): number {
        const audioVal = this.util.andAndShiftOperation(this.util.stringToBinary(this.secondByte_hex), bitComparison, shiftingPosition);
        //or I could +1 to audioVal but if audio gain changes in docs, it will be disrupted.

        //switch cases is safest method
        switch (audioVal) {
            case SerialComm_Constant.AUDIO_GAIN_INDEX_ZERO:
                return SerialComm_Constant.AUDIO_GAIN_ONE;
            case SerialComm_Constant.AUDIO_GAIN_INDEX_ONE:
                return SerialComm_Constant.AUDIO_GAIN_TWO;
            case SerialComm_Constant.AUDIO_GAIN_INDEX_TWO:
                return SerialComm_Constant.AUDIO_GAIN_THREE;
            case SerialComm_Constant.AUDIO_GAIN_INDEX_THREE:
                return SerialComm_Constant.AUDIO_GAIN_FOUR;
            case SerialComm_Constant.AUDIO_GAIN_INDEX_FOUR:
                return SerialComm_Constant.AUDIO_GAIN_FIVE;
            case SerialComm_Constant.AUDIO_GAIN_INDEX_FIVE:
                return SerialComm_Constant.AUDIO_GAIN_SIX;
            case SerialComm_Constant.AUDIO_GAIN_INDEX_SIX:
                return SerialComm_Constant.AUDIO_GAIN_SEVEN;
            case SerialComm_Constant.AUDIO_GAIN_INDEX_SEVEN:
                return SerialComm_Constant.AUDIO_GAIN_EIGHT;
        }
    }

    processHeartBeatLocator(bitComparison: string, shiftingPosition: number): boolean {
        return this.util.andAndShiftOperation(this.util.stringToBinary(this.secondByte_hex), bitComparison, shiftingPosition) === 1;
    }

    getStateOps(): any {
        return this.stethee;
    }
}
