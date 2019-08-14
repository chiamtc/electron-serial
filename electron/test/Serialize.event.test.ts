import Queue from "../utils/Queue";
import Serialize from "../classes/Serialize";
import Stethee from "../models/Stethee";
import {assert, expect} from "chai";
import SerialComm_Constant from "../constants/SerialComm_Constant";
import StateOfOperation from "../../electron/classes/StateOfOperation";
import SerialCommStore from "../classes/SerialCommStore";

describe('[0x04] [error test] Software Version as parameter SerializerGet test suite', () => {
    const val = '312e322e3031302e30303032';
    let reader: Serialize;
    let q: Queue<string>;
    let stethee: Stethee = new Stethee();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let state: SerialCommStore = new SerialCommStore();
    const obj = {
        func_param: SerialComm_Constant.SOFTWARE_VER,
        value: val,
        ack_dec: val.length / 2
    };
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('04');
        q.append('0d');
        q.append('31');
        q.append('2e');
        q.append('32');
        q.append('2e');
        q.append('30');
        q.append('31');
        q.append('30');
        q.append('2e');
        q.append('30');
        q.append('30');
        q.append('30');
        q.append('32');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('04');
        expect(reader.ack).equal('0d');
        expect(reader.value).equal('312e322e3031302e30303032');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });
    it('serializes the read func_param', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.not.have.property('softwareVersion', '1.2.010.0002');
        expect(obj).to.have.property('stethee_error', undefined);
    });
});

describe('[0x04] Software Version as parameter SerializerGet test suite', () => {
    const val = '312e322e3031302e30303032';
    let reader: Serialize;
    let q: Queue<string>;
    let stethee: Stethee = new Stethee();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let state: SerialCommStore = new SerialCommStore();
    const obj = {
        func_param: SerialComm_Constant.SOFTWARE_VER,
        value: val,
        ack_dec: val.length / 2
    };
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('04');
        q.append('0c');
        q.append('31');
        q.append('2e');
        q.append('32');
        q.append('2e');
        q.append('30');
        q.append('31');
        q.append('30');
        q.append('2e');
        q.append('30');
        q.append('30');
        q.append('30');
        q.append('32');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('04');
        expect(reader.ack).equal('0c');
        expect(reader.value).equal('312e322e3031302e30303032');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });
    it('serializes the read func_param', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('softwareVersion', '1.2.010.0002');
    });
});

describe('[0x06] [ON STATE] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 42 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let state: SerialCommStore = new SerialCommStore();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('06');
        q.append('02');
        q.append('42');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('06');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('42af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => { //retest
        const obj = reader.serialize();
        assert.isObject(obj);
        console.log('obj', obj)
        // expect(obj).to.have.property('operationState', SerialComm_Constant.ON);
    });
});

describe('[0x08] Filter ID as parameter SerializerGet test suite', () => {
    const val = 'f0f1f2f3f4f5f6f767';
    //fe 46 02 42 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let state: SerialCommStore = new SerialCommStore();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('08');
        q.append('09');
        q.append('f0');
        q.append('f1');
        q.append('f2');
        q.append('f3');
        q.append('f4');
        q.append('f5');
        q.append('f6');
        q.append('f7');
        q.append('67');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('08');
        expect(reader.ack).equal('09');
        expect(reader.value).equal('f0f1f2f3f4f5f6f767');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => { //retest
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('filterSelectStatus', '67');
        expect(obj).to.have.property('defaultFilterNumber', 'f6');
        expect(obj).to.have.property('activeFilterNumber', 'f7');
    });
});
