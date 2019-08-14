import SerialComm_Constant from '../constants/SerialComm_Constant';
import StateOfOperation from './StateOfOperation';
import Stethee from "../models/Stethee";
import SerializerGetInterface from "../interfaces/Serializer.get.interface";

export default class SerializerGet implements SerializerGetInterface {
    //stethee class model object
    stethee: Stethee;
    func_param: string;
    value: string;

    //state of operation parameter
    stateOfOps:StateOfOperation;
    //ack length in decimal
    ack_dec: number;

    constructor(serialize_object: any, stethee: Stethee, stateOfOps:StateOfOperation) {
        this.func_param = serialize_object.func_param;
        this.value = serialize_object.value;
        this.stethee = stethee;
        this.stateOfOps = stateOfOps;
        this.ack_dec = serialize_object.ack_dec;
    }

    //interface function
    parseGetCommand(): object { //0x40, 0x41...
        //switch in hex code
        let str = '';
        let obj = {};
        switch (this.func_param) {
            case SerialComm_Constant.PRODUCT_NAME:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                obj = {productName: str};
                this.stethee.productName = str;
                break;
            case SerialComm_Constant.PRODUCT_MODEL_NUMBER:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                obj = {product_model_number: str};
                this.stethee.productModelNumber = str;
                break;
            case SerialComm_Constant.PRODUCT_SERIAL_NUMBER:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                obj = {product_serial_number: str};
                this.stethee.productSerialNumber = str;
                break;
            case SerialComm_Constant.BLUETOOTH_NAME:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                obj = {bluetooth_name: str};
                this.stethee.bluetoothName = str;
                break;
            case SerialComm_Constant.SOFTWARE_VER:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                obj = {software_version: str};
                this.stethee.softwareVersion = str;
                break;
            case SerialComm_Constant.HARDWARE_VER:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                obj = {hardware_version: str};
                this.stethee.hardwareVersion = str;
                break;
            case SerialComm_Constant.STATE_OF_OPS:
                this.stateOfOps.convertStateOfOperation(this.value, this.stethee);
                obj = this.stateOfOps.getStateOps();
                break;
            case SerialComm_Constant.HEADSET_MAC:
                const headsetMac = this.value.slice();
                for (let i = 0; i < this.ack_dec; i++) { // O(n)
                    str += headsetMac.substring(i * 2, (2 * (i === 0 ? 0 : i - 1 + 1)) + 2) + (i === this.ack_dec - 1 ? "" : ":");
                }
                obj = {headset_mac: str};
                this.stethee.headsetMacAddr = str;
                break;
            case SerialComm_Constant.FILTERS_ID:
                let filter_arr=[];
                let filter_ids:any={};
                const filter_status = this.value.substring(this.value.length - 2);
                const filter_idstr = this.value.substring(0, this.value.length - 2);
                for (let i:number = 0; i < filter_idstr.length / 2; i++) {
                    const eachFilter = filter_idstr.substring(i * 2, (2 * (i === 0 ? 0 : i - 1 + 1)) + 2);
                    filter_arr.push(eachFilter)
                }
                Object.assign(filter_ids, filter_arr);
                this.stethee.filterPositions = filter_ids;
                this.stethee.filterSelectStatus = filter_status;
                this.stethee.processDefaultAndActiveFilters();
                obj = {filter_ids: filter_ids, filter_status: filter_status};
                break;
            case SerialComm_Constant.HEADSET_NAME:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                obj = {headset_name: str};
                this.stethee.headsetName = str;
                break;
        }
        return obj;
    }

    //interface function
    serialize(): Stethee { //returning Stethee model object
        this.parseGetCommand();
        return this.stethee;
    }
}
