import {expect, assert} from 'chai';
import StateOfOperation from '../classes/StateOfOperation';
import Queue from "../utils/Queue";
import SerialComm_Constant from "../constants/SerialComm_Constant";
import Stethee from "../models/Stethee";

describe('[0x06] - [First byte] - [ON STATE] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 42 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('42af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('42');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        expect(obj).to.have.property('operationState',SerialComm_Constant.ON);
        assert.isObject(obj);
    });
});

describe('[0x06] - [First byte] - [OFF STATE] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 02 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('02af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('02');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        expect(obj).to.have.property('operationState',SerialComm_Constant.OFF);
        assert.isObject(obj);
    });
});

describe('[0x06] - [First byte] - [STR STATE] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 82 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('8baf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('8b');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        expect(obj).to.have.property('operationState',SerialComm_Constant.STR);
        assert.isObject(obj);
    });
});

describe('[0x06] - [First byte] - [CHG STATE] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 C2 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('c2af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('c2');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('operationState',SerialComm_Constant.CHG);
    });
});

describe('[0x06] - [First byte] - [Battery level - NODATA] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 42 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('42af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('42');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        console.log(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_NODATA.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 1] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 46 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('46af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('46');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_ONE.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 2] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 4a af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('4aaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_TWO.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 5] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 4e af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('4eaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('4e');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        console.log(obj)
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_FIVE.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 10] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 52 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('52af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('52');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{

        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_TEN.toString());
    });
})

describe('[0x06] - [First byte] - [Battery level - 15] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 56 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('56af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('56');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{

        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_FIFTEEN.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 20] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 5a af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('5aaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('5a');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_TWENTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 25] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 5e af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('5eaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('5e');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_TWENTY_FIVE.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 30] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 62 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('62af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('62');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_THIRTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 40] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 66 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('66af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('66');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_FORTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 50] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 6a af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('6aaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('6a');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_FIFTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 60] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 6e af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('6eaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('6e');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_SIXTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 70] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 72 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('72af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('72');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_SEVENTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 80] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 76 af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('76af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('76');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_EIGHTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 90] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 7a af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('7aaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('7a');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_NINTY.toString());
    });
});

describe('[0x06] - [First byte] - [Battery level - 100] State of Operation as parameter StateOfOperation test suite',()=>{
    //fe 46 02 7e af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('7eaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('7e');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel',SerialComm_Constant.BATTERY_LVL_HUNDRED.toString());
    });
});

describe('[0x06] - [First byte] - [Auto Connect - 0] State of Operation as parameter',()=>{
    //fe 46 02 7e af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('46af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('46'); // 0100 0110 = 4 , 0000 1100 = 6
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        expect(obj).to.have.property('headsetConnected',SerialComm_Constant.HEADSET_CONNECTED);
        assert.isObject(obj);
    });
});

describe('[0x06] - [First byte] - [Auto Connect - 1] State of Operation as parameter',()=>{
    //fe 46 02 7e af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('41af',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('41'); // 0100 0110 = 4 , 0000 0001 = 6
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        expect(obj).to.have.property('headsetConnected',SerialComm_Constant.HEADSET_DISCONNECTED);
        assert.isObject(obj);
    });
});

describe('getStateOps() should return a proper',()=>{
    //fe 46 02 7e af 0d0a
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(()=>{
        sop.convertStateOfOperation('7eaf',stethee);
    });

    it('matches StateOfOperation object',()=>{
        expect(sop.firstByte_hex).equal('7e');
        expect(sop.secondByte_hex).equal('af');
    });

    it('checks if serialize() is an object type',()=>{
        const obj = sop.getStateOps();
        assert.isObject(obj);
        assert.instanceOf(obj, Stethee);
    });
});

describe('[0x06] - [Second byte] - [Filter Position] 000', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a00',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('00');
    });

    it('checks if serialize() is an object type', () => {
        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 0);
    });
});

describe('[0x06] - [Second byte] - [Filter Position] 001', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a21',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('21');
    });

    it('checks if serialize() is an object type', () => {
        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 1);
    });
});

describe('[0x06] - [Second byte] - [Filter Position] 002', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a42',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('42');
    });

    it('checks if serialize() is an object type', () => {

        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 2);
    });
});

describe('[0x06] - [Second byte] - [Filter Position] 003', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a63',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('63');
    });

    it('checks if serialize() is an object type', () => {
        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 3);
    });
});

describe('[0x06] - [Second byte] - [Filter Position] 004', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a84',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('84');
    });

    it('checks if serialize() is an object type', () => {
        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 4);
    });
});

describe('[0x06] - [Second byte] - [Filter Position] 005', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4aa5',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('a5');
    });

    it('checks if serialize() is an object type', () => {
        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 5);
    });
});

describe('[0x06] - [Second byte] - [Filter Position] 006', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4ac6',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('c6');
    });

    it('checks if serialize() is an object type', () => {
        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 6);
    });
});

describe('[0x06] [Second byte] [Filter Position] 007', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4ae7',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('e7');
    });

    it('checks if serialize() is an object type', () => {
        const obj = sop.getStateOps();
        expect(obj).to.have.property('filterPosition', 7);
    });
});

describe('[0x06] - [Second byte] - [Audio gain] 001', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a41',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('41');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_ONE)
    });
});

describe('[0x06] - [Second byte] - [Audio gain] 002', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a43',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('43');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_TWO)
    });
});

describe('[0x06] - [Second byte] - [Audio gain] 003', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a45',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('45');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_THREE)
    });
});

describe('[0x06] - [Second byte] - [Audio gain] 004', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a47',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('47');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_FOUR)
    });
});

describe('[0x06] - [Second byte] - [Audio gain] 005', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a49',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('49');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_FIVE)
    });
});

describe('[0x06] - [Second byte] - [Audio gain] 006', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a4b',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('4b');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_SIX)
    });
});

describe('[0x06] - [Second byte] - [Audio gain] 007', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a4d',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('4d');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_SEVEN)
    });
});

describe('[0x06] [Second byte] [Audio gain] 008', () => {
    // 7e 00
    let sop:StateOfOperation = new StateOfOperation();
    let stethee= new Stethee();
    beforeEach(() => {
        sop.convertStateOfOperation('4a4f',stethee);
    });

    it('matches StateOfOperation object', () => {
        expect(sop.firstByte_hex).equal('4a');
        expect(sop.secondByte_hex).equal('4f');
    });

    it('checks if serialize() is an object type', () => {
        const pos = sop.getStateOps();
        expect(pos).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_EIGHT)
    });
});
