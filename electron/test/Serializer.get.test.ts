import {expect, assert} from 'chai';
import SerialComm_Constant from "../constants/SerialComm_Constant";
import Stethee from "../models/Stethee";
import SerializerGet from '../classes/Serializer.get';
import StateOfOperation from "../classes/StateOfOperation";

describe('[0x00] Product Name as parameter SerializerGet test suite', () => {
    const val = '535445544845452050524f';
    const stethee = new Stethee();

    let stateOfOps: StateOfOperation = new StateOfOperation();
    const obj = {
        func_param: SerialComm_Constant.PRODUCT_NAME,
        value: val,
        ack_dec: val.length / 2
    }
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('productName', 'STETHEE PRO')
    });
});

describe('[0x01] Product Model Number as parameter SerializerGet test suite', () => {
    const val = '53545031';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.PRODUCT_MODEL_NUMBER,
        value: val,
        ack_dec: val.length / 2
    }
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('productModelNumber', 'STP1');
    });
});

describe('[0x02] Product Serial Number as parameter SerializerGet test suite', () => {
    const val = '343231373036303033383030';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.PRODUCT_SERIAL_NUMBER,
        value: val,
        ack_dec: val.length / 2
    };
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('productSerialNumber', '421706003800');
    });
});

describe('[0x03] Bluetooth name as parameter SerializerGet test suite', () => {
    const val = '5b5354505d204d792053545031';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.BLUETOOTH_NAME,
        value: val,
        ack_dec: val.length / 2
    }
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('bluetoothName', '[STP] My STP1');
    });
});

describe('[0x04] Software Version as parameter SerializerGet test suite', () => {
    const val = '312e322e3031302e30303032';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.SOFTWARE_VER,
        value: val,
        ack_dec: val.length / 2
    };
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('softwareVersion', '1.2.010.0002');
    });
});

describe('[0x05] Hardware Version as parameter SerializerGet test suite', () => {
    const val = '312e322e3031';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.HARDWARE_VER,
        value: val,
        ack_dec: val.length / 2
    };
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('hardwareVersion', '1.2.01');
    });
});

describe('[0x07] Headset MAC as parameter SerializerGet test suite', () => {
    const val = '024ba528f247';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.HEADSET_MAC,
        value: val,
        ack_dec: val.length / 2
    }
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('headsetMacAddr', '02:4b:a5:28:f2:47');
    });
});

describe('[0x06] [ON STATE] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 42 af 0d0a
    const val = '4aaf';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.STATE_OF_OPS,
        value: val,
        ack_dec: val.length / 2
    };
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(stethee, Stethee);
        expect(obj).to.have.property('operationState', SerialComm_Constant.ON); //charging
    });
});

describe('[0x08] Filter ID as parameter SerializerGet test suite', () => {
    const val = 'f0f1f2f3f400000002';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.FILTERS_ID,
        value: val,
        ack_dec: val.length / 2
    }
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.isObject(obj);
        assert.instanceOf(obj, Stethee);
        expect(obj).to.have.property('filterSelectStatus', '02');
        expect(obj).to.have.property('defaultFilterNumber', 'f0');
        expect(obj).to.have.property('activeFilterNumber', 'f2');
    });
});

describe('[0x09] Headset Name as parameter SerializerGet test suite', () => {
    const val = '4d792048656164736574';
    const stethee = new Stethee();
    const obj = {
        func_param: SerialComm_Constant.HEADSET_NAME,
        value: val,
        ack_dec: val.length / 2
    }
    let stateOfOps: StateOfOperation = new StateOfOperation();
    let getter = new SerializerGet(obj, stethee, stateOfOps);

    it('serializes the read func_param', () => {
        const obj = getter.serialize();
        assert.instanceOf(obj, Stethee);
        expect(obj).to.have.property('headsetName', 'My Headset');
    });
});
