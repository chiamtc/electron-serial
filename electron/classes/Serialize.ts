import Queue from '../utils/Queue';
import SerialCommUtil from "../utils/SerialCommUtil";
import SerialComm_Constant from '../constants/SerialComm_Constant';
import SerializeInterface from "../interfaces/Serialize.interface";
import Stethee from "../models/Stethee";
import SerializerSet from "./Serializer.set";
import SerializerGet from "./Serializer.get";
import SerialCommStore from "./SerialCommStore";
import SerializerEvent from "./Serializer.event";
import StateOfOperation from "./StateOfOperation";

export default class Serialize implements SerializeInterface {
    queue: Queue<any>;
    queueArray: string[];
    util: SerialCommUtil;
    //structure of each packet in hex
    startByte: string;
    func_param: string;
    ack: string;
    value: string;
    checksum: string;
    endByte: string;

    //structure of packet in binary
    func_bin: string;
    param_bin: string;

    //ack length in decimal
    ack_dec: number;

    //stethee class model object
    stethee: Stethee;

    //serial comm state
    state: SerialCommStore;

    //state of Operation
    stateOfOps: StateOfOperation;
    //for serialize_reader
    serialize_reader_obj: object;

    constructor(readQueue: Queue<any>, state: SerialCommStore, stethee: Stethee, stateOfOps: StateOfOperation) {
        this.queue = readQueue;
        this.util = new SerialCommUtil();
        this.stethee = stethee;
        this.state = state;
        this.stateOfOps = stateOfOps;
        this.dismantle(readQueue);
    }

    //interface function
    dismantle(readQueue: Queue<any>): void {
        this.queueArray = readQueue.toArray();
        this.startByte = this.queueArray.shift();
        this.func_param = this.queueArray.shift(); //0x43 [get] or 0x83 [set] or 0x00 [event]
        this.dismantleType();
        this.serialize_reader_obj = {
            func_param: this.func_param,
            value: this.value,
            ack_dec: this.ack_dec
        }
    }

    dismantleType() {
        switch (this.func_param[0]) {
            case SerialComm_Constant.ZERO: //event
                this.ack = this.queueArray.shift();
                this.endByte = this.queueArray.pop();
                this.checksum = this.queueArray.pop();
                this.value = this.queueArray.join('');
                console.log('reconstruction EVENT', this.startByte, this.func_param, this.ack, this.value, this.checksum, this.endByte);
                //ack length
                this.ack_dec = this.util.hexToDecimal(this.ack);
                break;
            case SerialComm_Constant.FOUR:
                this.ack = this.queueArray.shift();
                this.endByte = this.queueArray.pop();
                this.checksum = this.queueArray.pop();
                this.value = this.queueArray.join('');
                console.log('reconstruction GET', this.startByte, this.func_param, this.ack, this.value, this.checksum, this.endByte);
                //ack length
                this.ack_dec = this.util.hexToDecimal(this.ack);
                break;
            case SerialComm_Constant.EIGHT:
                this.endByte = this.queueArray.pop();
                this.checksum = this.queueArray.pop();
                this.ack = this.queueArray.join('');
                this.ack_dec = this.util.hexToDecimal(this.ack);
                console.log('reconstruction SET', this.startByte, this.func_param, this.ack, this.checksum, this.endByte)
                break;
        }
    }

    //interface function
    checkAck(): boolean {
        return this.ack.startsWith(SerialComm_Constant.ZERO);
    }

    //interface function
    serialize(): object { //returning Stethee model object
        const ack_status = this.checkAck();
        if (ack_status) {
            //this.parseCommand(this.func_param); //return obj:{prodctName:'Stethee Pro'} .. but not needed
            const func_bin = this.util.hexToBinary(this.func_param).substring(0, 2);
            const param_bin = this.util.hexToBinary(this.func_param).substring(2);
            this.func_bin = func_bin; // 00, 01, 10
            this.param_bin = param_bin; // last 4 values of a bit- _ _ _ _ <<0 0 0 0>>
            switch (this.func_param[0]) {
                case SerialComm_Constant.ZERO: //event
                    if (this.ack_dec === (this.value.length / 2)) {
                        return new SerializerEvent(this.serialize_reader_obj, this.stethee, this.stateOfOps).serialize();
                    } else {
                        const error_msg = SerialComm_Constant.SET_OPS_ERROR.get(this.ack_dec - SerialComm_Constant.ONE_TWENTY_EIGHT);
                        return {stethee_error: error_msg};
                    }
                case SerialComm_Constant.FOUR:
                    if (this.ack_dec === (this.value.length / 2)) {
                        return new SerializerGet(this.serialize_reader_obj, this.stethee, this.stateOfOps).serialize();
                    } else {
                        const error_msg = SerialComm_Constant.SET_OPS_ERROR.get(this.ack_dec - SerialComm_Constant.ONE_TWENTY_EIGHT);
                        return {stethee_error: error_msg};
                    }
                case SerialComm_Constant.EIGHT:
                    //serialize using state class which stores the new value - set state if response is 0x00;
                    return new SerializerSet(this.state, this.stethee, this.stateOfOps).serialize();
            }
        } else {
            //ack_dec = more than 128 in decimal and get value from Map in constants and error message
            const error_msg = SerialComm_Constant.SET_OPS_ERROR.get(this.ack_dec - SerialComm_Constant.ONE_TWENTY_EIGHT);
            return {stethee_error: error_msg};
        }
    }
}
