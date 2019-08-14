import {expect, assert} from 'chai';
import Serialize from '../classes/Serialize';
import Queue from "../utils/Queue";
import Stethee from "../models/Stethee";
import SerialComm_Constant from "../constants/SerialComm_Constant";
import StateOfOperation from "../classes/StateOfOperation";
import SerialCommStore from "../classes/SerialCommStore";

describe('[0x00] [error test] Product Name as parameter Serializer test suite', () => {
    //fe 40 0b 535445544845452050524f 0d 0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('40');
        q.append('0c');
        q.append('53');
        q.append('54');
        q.append('45');
        q.append('54');
        q.append('48');
        q.append('45');
        q.append('45');
        q.append('20');
        q.append('50');
        q.append('52');
        q.append('4f');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('40');
        expect(reader.ack).equal('0c');
        expect(reader.value).equal('535445544845452050524f');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('40');
        expect(reader.ack).equal('0c');
        expect(reader.value).equal('535445544845452050524f');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.not.have.property('productName', 'STETHEE PRO');
        expect(obj).to.have.property('stethee_error', undefined);
    });
});

describe('[0x00] Product Name as parameter Serializer test suite', () => {
    //fe 40 0b 535445544845452050524f 0d 0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('40');
        q.append('0b');
        q.append('53');
        q.append('54');
        q.append('45');
        q.append('54');
        q.append('48');
        q.append('45');
        q.append('45');
        q.append('20');
        q.append('50');
        q.append('52');
        q.append('4f');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('40');
        expect(reader.ack).equal('0b');
        expect(reader.value).equal('535445544845452050524f');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('40');
        expect(reader.ack).equal('0b');
        expect(reader.value).equal('535445544845452050524f');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('productName', 'STETHEE PRO');
    });
});

describe('[0x01] Product Model Number as parameter Serializer test suite', () => {
    //fe 41 04 53545031 0d 0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe')
        q.append('41')
        q.append('04')
        q.append('53')
        q.append('54')
        q.append('50')
        q.append('31');
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('41');
        expect(reader.ack).equal('04');
        expect(reader.value).equal('53545031');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        assert.isObject(obj);
        console.log('obj', obj)
        expect(obj).to.have.property('productModelNumber', 'STP1');
    });
});

describe('[0x02] Product Serial Number as parameter Serializer test suite', () => {
    //fe 42 0c 343231373036303033383030 0d 0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe')
        q.append('42')
        q.append('0c')
        q.append('34')
        q.append('32')
        q.append('31')
        q.append('37');
        q.append('30');
        q.append('36');
        q.append('30');
        q.append('30');
        q.append('33');
        q.append('38');
        q.append('30');
        q.append('30');
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('42');
        expect(reader.ack).equal('0c');
        expect(reader.value).equal('343231373036303033383030');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        assert.isObject(obj);
        expect(obj).to.have.property('productSerialNumber', '421706003800');
    });
});

describe('[0x03] Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe')
        q.append('43')
        q.append('0d')
        q.append('5b')
        q.append('53')
        q.append('54')
        q.append('50');
        q.append('5d');
        q.append('20');
        q.append('4d');
        q.append('79');
        q.append('20');
        q.append('53');
        q.append('54');
        q.append('50');
        q.append('31');
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('43');
        expect(reader.ack).equal('0d');
        expect(reader.value).equal('5b5354505d204d792053545031');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('bluetoothName', '[STP] My STP1');
    });
});

describe('[0x04] Software Version as parameter Serializer test suite', () => {
    //fe 44 0c 312e322e3031302e30303032 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('44');
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
        expect(reader.func_param).equal('44');
        expect(reader.ack).equal('0c');
        expect(reader.value).equal('312e322e3031302e30303032');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('softwareVersion', '1.2.010.0002');
    });
});

describe('[0x05] Hardware Version as parameter Serializer test suite', () => {
    //fe 45 05 312e322e3031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('45');
        q.append('06');
        q.append('31');
        q.append('2e');
        q.append('32');
        q.append('2e');
        q.append('30');
        q.append('31');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('45');
        expect(reader.ack).equal('06');
        expect(reader.value).equal('312e322e3031');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('hardwareVersion', '1.2.01');
    });
});

describe('[0x06] [ON STATE] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 42 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('42');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('42af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('operationState', SerialComm_Constant.ON);
    });
});

describe('[0x06] [OFF STATE] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 02 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('02');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('02af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('operationState', SerialComm_Constant.OFF);
    });
});

describe('[0x06] [STR STATE] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 82 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('82');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('82af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
    });
});

describe('[0x06] [CHG STATE] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 C2 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('c2');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('c2af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        console.log('object', obj)
        expect(obj).to.have.property('operationState', SerialComm_Constant.CHG);
    });
});

describe('[0x06] [Battery level - NODATA] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 42 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('42');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q,state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('42af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        console.log(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_NODATA.toString());
    });
});

describe('[0x06] [Battery level - 1] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 46 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('46');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('46af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_ONE.toString());
    });
});

describe('[0x06] [Battery level - 2] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 4a af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('4a');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('4aaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_TWO.toString());
    });
});

describe('[0x06] [Battery level - 5] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 4e af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('4e');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('4eaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_FIVE.toString());
    });
});

describe('[0x06] [Battery level - 10] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 52 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('52');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('52af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_TEN.toString());
    });
})

describe('[0x06] [Battery level - 15] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 56 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('56');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q,state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('56af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_FIFTEEN.toString());
    });
});

describe('[0x06] [Battery level - 20] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 5a af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('5a');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q,state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('5aaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_TWENTY.toString());
    });
});

describe('[0x06] [Battery level - 25] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 5e af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('5e');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q,state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('5eaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_TWENTY_FIVE.toString());

    });
});

describe('[0x06] [Battery level - 30] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 62 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('62');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('62af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_THIRTY.toString());
    });
});

describe('[0x06] [Battery level - 40] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 66 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('66');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('66af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_FORTY.toString());
    });
});

describe('[0x06] [Battery level - 50] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 6a af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('6a');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('6aaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_FIFTY.toString());
    });
});

describe('[0x06] [Battery level - 60] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 6e af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('6e');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('6eaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_SIXTY.toString());
    });
});

describe('[0x06] [Battery level - 70] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 72 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('72');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('72af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_SEVENTY.toString());
    });
});

describe('[0x06] [Battery level - 80] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 76 af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('76');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('76af');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_EIGHTY.toString());
    });
});

describe('[0x06] [Battery level - 90] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 7a af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('7a');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('7aaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_NINTY.toString());
    });
});

describe('[0x06] [Battery level - 100] State of Operation as parameter Serializer test suite', () => {
    //fe 46 02 7e af 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('46');
        q.append('02');
        q.append('7e');
        q.append('af');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('46');
        expect(reader.ack).equal('02');
        expect(reader.value).equal('7eaf');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        console.log('obj', obj)
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_HUNDRED.toString());
    });
});

describe('[0x07] Headset MAC as parameter Serializer test suite', () => {
    //fe 47 06 024ba528f247 0d 0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('47');
        q.append('06');
        q.append('02');
        q.append('4b');
        q.append('a5');
        q.append('28');
        q.append('f2');
        q.append('47');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('47');
        expect(reader.ack).equal('06');
        expect(reader.value).equal('024ba528f247');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('headsetMacAddr', '02:4b:a5:28:f2:47');
    });
});

describe('[0x08] Filter ID as parameter Serialze test suite', () => {
    //fe 48 09 f0f1f2f3f400000000 0d 0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('48');
        q.append('09');
        q.append('f0');
        q.append('f1');
        q.append('f2');
        q.append('f3');
        q.append('f4');
        q.append('00');
        q.append('00');
        q.append('00');
        q.append('02');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('48');
        expect(reader.ack).equal('09');
        expect(reader.value).equal('f0f1f2f3f400000002');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);

        expect(obj).to.have.property('filterSelectStatus', '02');
        expect(obj).to.have.property('defaultFilterNumber', 'f0');
        expect(obj).to.have.property('activeFilterNumber', 'f2');
    });
});

describe('[0x09] Headset Name as parameter Serialze test suite', () => {
    //fe 49 0a 4d792048656164736574 0d 0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
     let state: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        q = new Queue<string>();
        q.append('fe');
        q.append('49');
        q.append('0a');
        q.append('4d');
        q.append('79');
        q.append('20');
        q.append('48');
        q.append('65');
        q.append('61');
        q.append('64');
        q.append('73');
        q.append('65');
        q.append('74');
        q.append('0d');
        q.append('0a');
        reader = new Serialize(q, state, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('49');
        expect(reader.ack).equal('0a');
        expect(reader.value).equal('4d792048656164736574');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.isObject(obj);
        expect(obj).to.have.property('headsetName', 'My Headset');
    });
});
