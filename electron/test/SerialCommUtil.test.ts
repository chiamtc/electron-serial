import {expect, assert} from 'chai';
import SerialCommUtil from '../utils/SerialCommUtil';
import SerialComm_Constant from "../constants/SerialComm_Constant";

describe('SerialCommUtil test', () => {
    let scu: SerialCommUtil;
    beforeEach(() => {
        scu = new SerialCommUtil();
    })

    it('tests buffer to Hex', () => {
        const hex= scu.bufferToHex('fe400d0a');
        console.log('hex',hex)
    });

    it('tests hex to binary', ()=>{
        const bin = scu.hexToBinary('3f');
        expect(bin).equal(SerialComm_Constant.BIN_3F);
    });

    it('tests hex to decimal',()=>{
        const dec = scu.hexToDecimal('3f');
        expect(dec).equal(63);
    })

    it('tests binary to hex', ()=>{
        const hex2 = scu.binaryToHex(SerialComm_Constant.BIN_3F);
        expect(hex2).equal('3f');
    });

    it('tests normal string to hex',()=>{
        const hexName = scu.stringToHex('new name');
        expect(hexName).equal('6e6577206e616d65');
    });

    it('tests string to binary',()=>{
        const bin= scu.stringToBinary('4a');
        expect(bin).equal('01001010');
    });

    it('tests binary to decimal',()=>{
        const dec = scu.binaryToDecimal('01001010');
        expect(dec).equal(74);
    });

    it('tests hex to buffer',()=>{
        const b = scu.stringtoBuffer('4a');
        assert.instanceOf(b, Buffer);
        expect(b[0]).equal(74) //4a -> decimal 74
    });

    it('tests and + shift operation',()=>{
        //use for state of oepration, im comparing d6 d7 of first byte
        // 00 -off , 01
       const shifted = scu.andAndShiftOperation('01000000', '11000000', 6);
       expect(shifted).equal(1);
    });
});
