//store concept from redux, declared and initialized when app is booted.
//usage: main.ts
export default interface SerialCommStoreInterface{
    convertSetSerialComm(ops:string, newValue:string):void;
    convertGetSerialComm(ops:string):void;
    getHexValue():string;
    getValue():string; //plain english value
    getHexOps():string; //func_param in HEX
    getFullHexValue():string; //full hex command for stethee //e.g. fe 83 <plain english in hex> 0d 0a
}
