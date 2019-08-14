import SerialCommUtil from "../utils/SerialCommUtil";
import SerialComm_Constant from "../constants/SerialComm_Constant";
import Stethee from "../models/Stethee";
import SerializerSetInterface from "../interfaces/Serializer.set.interface";
import SerialCommStore from "./SerialCommStore";
import StateOfOperation from "./StateOfOperation";

export default class SerializerSet implements SerializerSetInterface {
    //stethee class model object
    stethee: Stethee;
    scu: SerialCommUtil;
    ops: string;
    state: SerialCommStore;
    stateOfOps: StateOfOperation;

    constructor(serialComm_state: SerialCommStore, stethee: Stethee, stateOfOps: StateOfOperation) {
        this.scu = new SerialCommUtil();
        this.stethee = stethee;
        this.state = serialComm_state;
        this.stateOfOps = stateOfOps;
    }

    serialize(): Stethee {
        switch (this.state.getHexOps()) { //0x83, 0x86...
            case SerialComm_Constant.BLUETOOTH_NAME_SET:
                this.stethee.bluetoothName = this.state.getValue();
                break;
            case SerialComm_Constant.STATE_OF_OPS_SET:
                //set state of operation and update stethee class model;
                //extracting from 2nd to last 4 characters, fe86 [actual 2 bytes values] 0d0a
                const stateOpsVal = this.state.getFullHexValue().substring(4, this.state.getFullHexValue().length - 4);
                const sop = this.stateOfOps.convertStateOfOperation(stateOpsVal, this.stethee);
                break;
            case SerialComm_Constant.HEADSET_MAC_SET:
                const headsetMac = this.state.getValue();
                if(headsetMac !=='') {
                    //either [set] actual full mac addr or [erase] ff:ff:ff:ff:ff:ff
                    let mac_addr = '';
                    const mac_addr_limit = headsetMac.length / 2;
                    for (let i = 0; i < mac_addr_limit; i++) { // O(n)
                        const a = headsetMac.substring(i * 2, (2 * (i === 0 ? 0 : i - 1 + 1)) + 2);
                        mac_addr += a + (i === mac_addr_limit - 1 ? "" : ":");
                    }
                    this.stethee.headsetMacAddr = mac_addr;
                }else{
                    //force connect fe 87 0d 0a
                    this.stethee.headsetConnected = SerialComm_Constant.HEADSET_CONNECTED;
                    this.stethee.isHeadsetConnected = true;
                }
                break;
            case SerialComm_Constant.HEADSET_NAME_SET:
                this.stethee.headsetName = this.state.getValue();
                break;
        }
        return this.stethee;
    }

}
