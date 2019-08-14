import SerialComm_Constant from "../constants/SerialComm_Constant";
import Stethee from "../models/Stethee";
import SerializerEventInterface from "../interfaces/Serializer.event.interface";
import StateOfOperation from "./StateOfOperation";

export default class SerializerEvent implements SerializerEventInterface {
    //stethee class model object
    stethee: Stethee;
    func_param: string;
    value: string;
    stateOfOps: StateOfOperation;
    //ack length in decimal
    ack_dec: number;

    constructor(serialize_object: any, stethee: Stethee, stateOfOps: StateOfOperation) {
        this.func_param = serialize_object.func_param;
        this.value = serialize_object.value;
        this.stethee = stethee;
        this.stateOfOps = stateOfOps;
        this.ack_dec = serialize_object.ack_dec;
    }

    parseEventCommand(): object {
        let obj = {};
        let str = '';
        switch (this.func_param) {
            case SerialComm_Constant.SOFTWARE_VER_EVENT:
                str += Buffer.from(this.value, 'hex').toString('utf8');
                this.stethee.softwareVersion = str;
                obj = {software_version: str};
                break;
            case SerialComm_Constant.STATE_OF_OPS_EVENT:
                this.stateOfOps.convertStateOfOperation(this.value, this.stethee);
                obj = this.stateOfOps.getStateOps();
                break;
            case SerialComm_Constant.FILTERS_ID_EVENT:
                let filter_arr = [];
                let filter_ids: any = {};
                const filter_status = this.value.substring(this.value.length - 2);
                const filter_idstr = this.value.substring(0, this.value.length - 2);
                for (let i: number = 0; i < filter_idstr.length / 2; i++) {
                    const eachFilter = filter_idstr.substring(i * 2, (2 * (i === 0 ? 0 : i - 1 + 1)) + 2);
                    filter_arr.push(eachFilter)
                }
                Object.assign(filter_ids, filter_arr);
                this.stethee.filterPositions = filter_ids;
                this.stethee.filterSelectStatus = filter_status;
                this.stethee.processDefaultAndActiveFilters();
                obj = {filter_ids: filter_ids, filter_status: filter_status};
                break;
        }
        return obj;
    }

    serialize(): Stethee {
        this.parseEventCommand();
        return this.stethee;
    }

}
