import SerialCommConstant from '../constants/SerialComm_Constant';

export default class SerialCommUtil {
    constructor() {
    }

    bufferToHex(content: any) {
        return content.toString('hex');
    }

    hexToBinary(content: any) {
        return (parseInt(content, 16).toString(2)).padStart(8,'0');
    }

    hexToDecimal(content: any): number {
        return parseInt(content, SerialCommConstant.HEX);
    }

    binaryToHex(content: any): string {
        return parseInt(content, SerialCommConstant.BINARY).toString(SerialCommConstant.HEX);
    }

    stringToHex(content: string) { //string = "john smith"
        return Buffer.from(content, 'utf8').toString('hex'); //might need to ensure the conversion properly in other language
    }

    stringtoBuffer(content:string):Buffer{
        return Buffer.from(content,'hex')
    }

    stringToBinary(content: string) { //this takes off for bit shifting , string = binary = '1100001010'
        return (parseInt(content, 16).toString(2)).padStart(8, '0');
    }

    binaryToDecimal(content: any): number {
        return parseInt(parseInt(content, SerialCommConstant.BINARY).toString(SerialCommConstant.DECIMAL));
    }

    andAndShiftOperation(hexValue: string, bitComparison: string, position: number): number { //perhaps able to break this function into two parts - andOperation:andValue and shiftOperation(andProduct,position):shiftedValue
        //return (parseInt(hexValue, 2) & parseInt(bitComparison, 2)) >> position;
        // hexValue & bitTocompare , in SoO (only c0, 3c, 02,01 = which bit in binary and invert from 0 to 1) >> position (which bit)
        return (parseInt(hexValue, 2) & parseInt(bitComparison, 2)) >> position;
    }
}
