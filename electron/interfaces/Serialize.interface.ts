import Queue from "../utils/Queue";
import Stethee from "../models/Stethee";
import SerialCommStore from "../classes/SerialCommStore";
import SerialCommUtil from "../utils/SerialCommUtil";
import StateOfOperation from "../classes/StateOfOperation";

export default interface SerializeInterface{
    stethee:Stethee;
    state: SerialCommStore;
    queue: Queue<any>;
    stateOfOps:StateOfOperation;
    queueArray: string[];
    util: SerialCommUtil;
    startByte: string;
    func_param: string;
    ack: string;
    value: string;
    checksum: string;
    endByte: string;

    //structure of packet in binary
    func_bin: string;
    param_bin: string;

    dismantle(queue:Queue<any>):void;
    checkAck():boolean;
    serialize():object;
}
