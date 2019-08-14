import {expect, assert} from 'chai';
import Stethee from "../models/Stethee";
import SerialCommStore from "../classes/SerialCommStore";
import SerializerSet from '../classes/Serializer.set';
import SerialComm_Constant from "../constants/SerialComm_Constant";
import StateOfOperation from "../classes/StateOfOperation";

const faker = require('faker');

describe('[0x03] Bluetooth name as parameter SerializerSet test suite', () => {
    const stethee = new Stethee();
    const state = new SerialCommStore();
    const newName = faker.name.findName();
    state.convertSetSerialComm('3', newName);
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let setter = new SerializerSet(state, stethee, stateOfOps);

    it('serializes the write func_param', () => {
        const obj = setter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('bluetoothName', newName);
    });
});

describe('[0x06] State of Operation SerializerSet test suite', () => {
    const stethee = new Stethee();
    const state = new SerialCommStore();
    const newName = faker.name.findName();
    state.convertSetSerialComm('6', {firstByte: '4b', secondByte: '46'});
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let setter = new SerializerSet(state, stethee, stateOfOps);

    it('serializes the write func_param', () => {
        const obj = setter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('operationState', SerialComm_Constant.ON);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_TWO.toString());
        expect(obj).to.have.property('headsetConnected', SerialComm_Constant.HEADSET_CONNECTED);
        expect(obj).to.have.property('autoConnect', true);
        expect(obj).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_FOUR);
        expect(obj).to.have.property('filterPosition', 2);
        expect(obj).to.have.property('filterStatus', false);
        expect(obj).to.have.property('heartBeatLocator', false);
    });
});

describe('[0x07] [set mac addr] Headset MAC as parameter SerializerSet test suite', () => {
    const stethee = new Stethee();
    const state = new SerialCommStore();
    state.convertSetSerialComm('7', '2c1e032356d9');
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let setter = new SerializerSet(state, stethee, stateOfOps);

    it('serializes the write func_param', () => {
        const obj = setter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('headsetMacAddr', '2c:1e:03:23:56:d9');
    });
});

describe('[0x07] [erase mac addr] Headset MAC as parameter SerializerSet test suite', () => {
    const stethee = new Stethee();
    const state = new SerialCommStore();
    state.convertSetSerialComm('7', 'ffffffffffff');
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let setter = new SerializerSet(state, stethee, stateOfOps);

    it('serializes the write func_param', () => {
        const obj = setter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('headsetMacAddr', 'ff:ff:ff:ff:ff:ff');
    });
});

describe('[0x07] [force connect] Headset MAC as parameter SerializerSet test suite', () => {
    const stethee = new Stethee();
    const state = new SerialCommStore();
    state.convertSetSerialComm('7', '');
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let setter = new SerializerSet(state, stethee, stateOfOps);

    it('serializes the write func_param', () => {
        const obj = setter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.not.have.property('headsetMacAddr', '');
        expect(obj).to.have.property('headsetConnected',SerialComm_Constant.HEADSET_CONNECTED);
        expect(obj).to.have.property('isHeadsetConnected',true);
    });
});

describe('[0x09] Headset Name as parameter SerializerSet test suite', () => {
    const stethee = new Stethee();
    const state = new SerialCommStore();
    const newHSName = faker.name.findName();
    state.convertSetSerialComm('9', newHSName);
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let setter = new SerializerSet(state, stethee, stateOfOps);

    it('serializes the write func_param', () => {
        const obj = setter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('headsetName', newHSName);
    });
});
