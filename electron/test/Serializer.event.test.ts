import Stethee from "../models/Stethee";
import {assert, expect} from "chai";
import SerialComm_Constant from "../constants/SerialComm_Constant";
import StateOfOperation from "../../electron/classes/StateOfOperation";
import SerializerEvent from "../classes/Serializer.event";

describe('[0x04] Software Version as parameter SerializerGet test suite', () => {
    const val = '312e322e3031302e30303032';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.SOFTWARE_VER_EVENT,
        value: val,
        ack_dec: val.length / 2
    };
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerEvent(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('softwareVersion', '1.2.010.0002');
    });
});

describe('[0x06] [ON STATE] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 42 af 0d0a
    const val = 'ce4e';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.STATE_OF_OPS_EVENT,
        value: val,
        ack_dec: val.length / 2
    };
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerEvent(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('operationState', SerialComm_Constant.CHG); //charging
    });
});

describe('[0x08] Filter ID as parameter SerializerGet test suite', () => {
    const val = 'f0f1f2f3f400000002';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.FILTERS_ID_EVENT,
        value: val,
        ack_dec: val.length / 2
    }
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerEvent(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(obj, Stethee);
        expect(obj).to.have.property('filterSelectStatus', '02');
        expect(obj).to.have.property('defaultFilterNumber', 'f0');
        expect(obj).to.have.property('activeFilterNumber', 'f2');
    });
});
