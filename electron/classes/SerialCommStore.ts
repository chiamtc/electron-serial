import SerialCommUtil from "../utils/SerialCommUtil";
import SerialComm_Constant from "../constants/SerialComm_Constant";
import SerialCommStoreInterface from "../interfaces/SerialComm.store.interface";
import {string} from "prop-types";

export default class SerialCommStore implements SerialCommStoreInterface {
    private value: string; //human-readable name E.g. "new name"
    private hexValue: string;  // conversion to hex of "new name" -> "6e6577"
    private fullHexValue: string; //full hex for Stethee fe6e65770d0a
    private buffer: Buffer; //full hex for Stethee fe6e65770d0a
    scu: SerialCommUtil;
    ops: string;
    private hexOps: string;

    constructor() {
        this.scu = new SerialCommUtil();
    }

    convertGetSerialComm(ops: string): void {
        //fe 4 [x= func_param] 0d 0a
        this.fullHexValue = SerialComm_Constant.STARTBYTE_HEX + SerialComm_Constant.FOUR + ops.toUpperCase() + SerialComm_Constant.CHECKSUM_HEX + SerialComm_Constant.ENDBYTE_HEX;
        this.buffer = this.scu.stringtoBuffer(this.fullHexValue); //return Buffer <fe 4x 0d 0a>
    }

    convertSetSerialComm(ops: string, newValue: any): void {
        const setOps = SerialComm_Constant.EIGHT + ops; //8[x=func_param]
        this.hexOps = setOps;
        switch (setOps) {
            case SerialComm_Constant.BLUETOOTH_NAME_SET:
            case SerialComm_Constant.HEADSET_MAC_SET:
            case SerialComm_Constant.HEADSET_NAME_SET:
                this.value = newValue;
                this.hexValue = this.scu.stringToHex(newValue); //string to hex converted
                //fe 8[x=func_param] [hex value for setter] 0d 0a
                this.fullHexValue = SerialComm_Constant.STARTBYTE_HEX + setOps + this.hexValue.toUpperCase() + SerialComm_Constant.CHECKSUM_HEX + SerialComm_Constant.ENDBYTE_HEX;
                console.log('SerialCommStore convertSetSerialComm() case bt,mac and name', this.fullHexValue)
                break;
            case SerialComm_Constant.STATE_OF_OPS_SET:
                if(newValue.hasOwnProperty('secondByte')) {
                    this.fullHexValue = SerialComm_Constant.STARTBYTE_HEX + setOps + newValue.firstByte + newValue.secondByte + SerialComm_Constant.CHECKSUM_HEX + SerialComm_Constant.ENDBYTE_HEX;
                    console.log('SerialCommStore convertSetSerialComm() case SoO', this.fullHexValue)
                }else{
                    this.fullHexValue = SerialComm_Constant.STARTBYTE_HEX + setOps + newValue.firstByte + SerialComm_Constant.CHECKSUM_HEX + SerialComm_Constant.ENDBYTE_HEX;
                    console.log('SerialCommStore convertSetSerialComm() case SoO', this.fullHexValue)
                }
                break;
        }
        this.buffer = this.scu.stringtoBuffer(this.fullHexValue);
    }

    getHexValue(): string { //new value in HEX
        return this.hexValue;
    }

    getHexOps(): string { // operation func_param 0x83 0x86
        return this.hexOps;
    }

    getValue(): string { //string value
        return this.value;
    }

    getFullHexValue(): string { //full hex value with 0xfe [func_param_hex] [value_hex] [checksum_hex] [endbyte_hex]
        return this.fullHexValue;
    }

    getBuffer():Buffer{
        return this.buffer;
    }
}
