import {expect, assert} from 'chai';
import SerialComm_Constant from "../constants/SerialComm_Constant";
import SerialCommStore from "../classes/SerialCommStore";

const faker = require('faker');

describe('[SET] State for sending command in serial comm test suite', () => {
    const state = new SerialCommStore();
    const newName = faker.name.findName();
    state.convertSetSerialComm('3', newName);

    it('tests state for write func_param', () => {
        const hexVal = state.getHexValue();
        const hexOps = state.getHexOps();
        const val = state.getValue();
        const fullHexValue = state.getFullHexValue();
        assert.isString(hexVal);
        expect(hexVal).to.equal(Buffer.from(newName).toString('hex'));
        expect(hexOps).to.equal(SerialComm_Constant.BLUETOOTH_NAME_SET);
        expect(val).to.equal(newName);
        const compareFullHexVal = SerialComm_Constant.STARTBYTE_HEX + SerialComm_Constant.BLUETOOTH_NAME_SET + Buffer.from(newName).toString('hex') + SerialComm_Constant.CHECKSUM_HEX + SerialComm_Constant.ENDBYTE_HEX
        const b = state.getBuffer();
        assert.instanceOf(b, Buffer);
        expect(fullHexValue.toLowerCase()).to.equal(compareFullHexVal.toLowerCase());
    });
});

describe('[GET] State for sending command in serial comm test suite', () => {
    const state = new SerialCommStore();
    state.convertGetSerialComm('3');

    it('tests state for write func_param', () => {
        const fullHexValue = state.getFullHexValue();
        const compareFullHexVal = SerialComm_Constant.STARTBYTE_HEX + SerialComm_Constant.BLUETOOTH_NAME + SerialComm_Constant.CHECKSUM_HEX + SerialComm_Constant.ENDBYTE_HEX
        const b = state.getBuffer();
        assert.instanceOf(b, Buffer);
        expect(fullHexValue.toLowerCase()).to.equal(compareFullHexVal.toLowerCase());
    });
});
