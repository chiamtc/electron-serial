import * as SerialPort from 'serialport';
import ByteLength = SerialPort.parsers.ByteLength;
import Stethee from "../models/Stethee";
import Serialize from "../classes/Serialize";
import SerialCommStore from "../classes/SerialCommStore";
import StateOfOperation from "../classes/StateOfOperation";

export default interface SerialCommunicationInterface{
    serialPort:SerialPort;
    parser:ByteLength;

    //constructor parameters
    stethee:Stethee;
    mainWindow: any;
    state:SerialCommStore;
    stateOfOps:StateOfOperation;
    serialize:Serialize;

    listPorts():Promise<any>;
    getSerialPort():SerialPort;
    checkOpenPort(): Promise<any>
    read():Promise<any>;
    write(operation:string, param:Buffer):Promise<any>;
}
