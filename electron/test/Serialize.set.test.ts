import {expect, assert} from 'chai';
import Serialize from '../classes/Serialize';
import Queue from "../utils/Queue";
import SerialComm_Constant from "../constants/SerialComm_Constant";
import Stethee from "../models/Stethee";
import SerialCommStore from "../classes/SerialCommStore";
import StateOfOperation from "../classes/StateOfOperation";

//error references
describe('[0x03] [SET] [RES-00] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        expect(obj).to.have.property('bluetoothName', 'new name')
    });
});

describe('[0x03] [SET] [RES-01] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('81')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('81');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(1));
    });
});

describe('[0x03] [SET] [RES-02] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('82')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('82');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(2));
    });
});

describe('[0x03] [SET] [RES-03] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('83')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('83');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(3));
    });
});

describe('[0x03] [SET] [RES-04] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('84')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('84');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(4));
    });
});

describe('[0x03] [SET] [RES-05] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('85')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('85');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(5));
    });
});

describe('[0x03] [SET] [RES-06] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('86')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('86');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(6));
    });
});

describe('[0x03] [SET] [RES-07] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('87')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('87');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(7));
    });
});

describe('[0x03] [SET] [RES-08] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('88')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('88');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(8));
    });
});

describe('[0x03] [SET] [RES-09] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('89')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('89');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(9));
    });
});

describe('[0x03] [SET] [RES-11] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('8b')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('8b');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(11));
    });
});

describe('[0x03] [SET] [RES-12] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('8c')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('8c');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(12));
    });
});

describe('[0x03] [SET] [RES-14] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('8e')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('8e');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(14));
    });
});

describe('[0x03] [SET] [RES-15] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('8f')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('8f');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(15));
    });
});

describe('[0x03] [SET] [RES-16] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('90')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('90');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(16));
    });
});

describe('[0x03] [SET] [RES-17] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('91')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('91');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(17));
    });
});

describe('[0x03] [SET] [RES-18] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('92')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('92');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(18));
    });
});

describe('[0x03] [SET] [RES-19] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('93')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('93');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(19));
    });
});

describe('[0x03] [SET] [RES-20] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('94')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('94');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(20));
    });
});

describe('[0x03] [SET] [RES-21] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('95')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('95');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(21));
    });
});

describe('[0x03] [SET] [RES-22] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('96')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('96');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(22));
    });
});

describe('[0x03] [SET] [RES-23] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('97')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('97');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(23));
    });
});

describe('[0x03] [SET] [RES-24] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('98')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('98');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(24));
    });
});

describe('[0x03] [SET] [RES-25] - Bluetooth name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();
    beforeEach(() => {
        writer.convertSetSerialComm('3', 'new name');
        q = new Queue<string>();
        q.append('fe')
        q.append('83')
        q.append('99')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('83');
        expect(reader.ack).equal('99');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        expect(obj).to.have.property('stethee_error', SerialComm_Constant.SET_OPS_ERROR.get(25));
    });
});

describe('[0x06] [SET] [RES-00] - [ON] State of Operation as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '47', secondByte: '46'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.ON);
        expect(obj).to.have.property('batteryLevel', SerialComm_Constant.BATTERY_LVL_ONE.toString());
        expect(obj).to.have.property('headsetConnected', SerialComm_Constant.HEADSET_CONNECTED);
        expect(obj).to.have.property('autoConnect',true);
        //test second byte
        expect(obj).to.have.property('filterPosition',2);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain', SerialComm_Constant.AUDIO_GAIN_FOUR);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [00] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: '00'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',0);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_ONE);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [22] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: '22'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',1);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_TWO);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [44] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: '44'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',2);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_THREE);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [66] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: '66'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',3);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_FOUR);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [88] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: '88'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',4);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_FIVE);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [AA] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: 'aa'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',5);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_SIX);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [cc] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: 'cc'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',6);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_SEVEN);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [ee] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b', secondByte: 'ee'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.have.property('filterPosition',7);
        expect(obj).to.have.property('filterStatus',false);
        expect(obj).to.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_EIGHT);
        expect(obj).to.have.property('heartBeatLocator',false);
    });
});

describe('[0x06] [SET] [RES-00] - [STR] [only first byte] State of Operation Filter Number and Audio gain as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('6', {firstByte: '8b'});
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.STATE_OF_OPS_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('86');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj);
        //test first byte
        expect(obj).to.have.property('operationState', SerialComm_Constant.STR);
        expect(obj).to.have.property('recordTimeout', '22');
        //test second byte
        expect(obj).to.not.have.property('filterPosition',7);
        expect(obj).to.not.have.property('filterStatus',false);
        expect(obj).to.not.have.property('audioGain',SerialComm_Constant.AUDIO_GAIN_EIGHT);
        expect(obj).to.not.have.property('heartBeatLocator',false);
    });
});

describe('[0x07] [SET] [RES-00] - [Set new headset mac addr] Headset MAC address as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('7', '2c1e032356d9');
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.HEADSET_MAC_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('87');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        expect(obj).to.have.property('headsetMacAddr','2c:1e:03:23:56:d9');

    });
});

describe('[0x07] [SET] [RES-00] - [Erase existing headset mac addr] Headset MAC address as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('7', 'ffffffffffff');
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.HEADSET_MAC_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('87');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        expect(obj).to.have.property('headsetMacAddr','ff:ff:ff:ff:ff:ff');

    });
});

describe('[0x07] [SET] [RES-00] - [force connect] Headset MAC address as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('7', '');
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.HEADSET_MAC_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('87');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        console.log(obj)
        expect(obj).to.not.have.property('headsetMacAddr','');
        expect(obj).to.have.property('headsetConnected',SerialComm_Constant.HEADSET_CONNECTED);
        expect(obj).to.have.property('isHeadsetConnected',true);

    });
});

describe('[0x09] [SET] [RES-00] - Headset name as parameter Serializer test suite', () => {
    //fe 43 0d 5b5354505d204d792053545031 0d0a
    let q: Queue<string>;
    let reader: Serialize;
    let stethee: Stethee = new Stethee();
    let writer: SerialCommStore = new SerialCommStore();
    let stateOfOps: StateOfOperation = new StateOfOperation();

    beforeEach(() => {
        writer.convertSetSerialComm('9', 'new headset name');
        q = new Queue<string>();
        q.append('fe')
        q.append(SerialComm_Constant.HEADSET_NAME_SET)
        q.append('00')
        q.append('0d')
        q.append('0a')
        reader = new Serialize(q, writer, stethee, stateOfOps);
    });

    it('has empty Serializer object', () => {
        expect(reader.startByte).equal('fe');
        expect(reader.func_param).equal('89');
        expect(reader.ack).equal('00');
        expect(reader.checksum).equal('0d');
        expect(reader.endByte).equal('0a');
    });

    it('has empty Serializer object', () => {
        const obj = reader.serialize();
        assert.instanceOf(obj, Stethee)
        expect(obj).to.have.property('headsetName', 'new headset name')
    });
});
