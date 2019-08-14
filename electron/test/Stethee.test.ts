import {expect, assert} from 'chai';
import Stethee from '../models/Stethee';

const faker = require('faker');

describe('Stethee model', () => {
    let stethee: Stethee;
    beforeEach(() => {
        stethee = new Stethee();
    });

    it('get and set productName of Stethee model object', () => {
        const productName = faker.name.findName();
        assert.isUndefined(stethee.productName)
        stethee.productName = productName;
        expect(stethee.productName).equal(productName);
    })

    it('get and set productModelNumber of Stethee model object', () => {
        const productModelNumber = faker.name.findName();
        assert.isUndefined(stethee.productModelNumber)
        stethee.productModelNumber = productModelNumber;
        expect(stethee.productModelNumber).equal(productModelNumber);
    })

    it('get and set productSerialNumber of Stethee model object', () => {
        const productSerialNumber = faker.name.findName();
        assert.isUndefined(stethee.productSerialNumber)
        stethee.productSerialNumber = productSerialNumber;
        expect(stethee.productSerialNumber).equal(productSerialNumber);
    })

    it('get and set bluetoothName of Stethee model object', () => {
        const bluetoothName = faker.name.findName();
        assert.isUndefined(stethee.bluetoothName)
        stethee.bluetoothName = bluetoothName;
        expect(stethee.bluetoothName).equal(bluetoothName);
    })

    it('get and set softwareVersion of Stethee model object', () => {
        const softwareVersion = faker.name.findName();
        assert.isUndefined(stethee.softwareVersion)
        stethee.softwareVersion = softwareVersion;
        expect(stethee.softwareVersion).equal(softwareVersion);
    })

    it('get and set hardwareVersion of Stethee model object', () => {
        const hardwareVersion = faker.name.findName();
        assert.isUndefined(stethee.hardwareVersion)
        stethee.hardwareVersion = hardwareVersion;
        expect(stethee.hardwareVersion).equal(hardwareVersion);
    })

    it('get and set headsetMacAddr of Stethee model object', () => {
        const headsetMacAddr = faker.name.findName();
        assert.isUndefined(stethee.headsetMacAddr)
        stethee.headsetMacAddr = headsetMacAddr;
        expect(stethee.headsetMacAddr).equal(headsetMacAddr);
    })

    it('get and set headsetName of Stethee model object', () => {
        const headsetName = faker.name.findName();
        assert.isUndefined(stethee.headsetName)
        stethee.headsetName = headsetName;
        expect(stethee.headsetName).equal(headsetName);
    })

    it('get and set operationState of Stethee model object', () => {
        const operationState = faker.name.findName();
        assert.isUndefined(stethee.operationState)
        stethee.operationState = operationState;
        expect(stethee.operationState).equal(operationState);
    })

    it('get and set batteryLevel of Stethee model object', () => {
        const batteryLevel = faker.name.findName();
        assert.isUndefined(stethee.batteryLevel)
        stethee.batteryLevel = batteryLevel;
        expect(stethee.batteryLevel).equal(batteryLevel);
    })

    it('get and set headsetConnected of Stethee model object', () => {
        const headsetConnected = faker.name.findName();
        assert.isUndefined(stethee.headsetConnected)
        stethee.headsetConnected = headsetConnected;
        expect(stethee.headsetConnected).equal(headsetConnected);
    })

    it('get and set isHeadsetConnected of Stethee model object', () => {
        const isHeadsetConnected = faker.random.boolean();
        assert.isUndefined(stethee.isHeadsetConnected)
        stethee.isHeadsetConnected = isHeadsetConnected;
        expect(stethee.isHeadsetConnected).equal(isHeadsetConnected);
    })

    it('get and set autoConnect of Stethee model object', () => {
        const autoConnect = faker.random.boolean();
        assert.isUndefined(stethee.autoConnect)
        stethee.autoConnect = autoConnect;
        expect(stethee.autoConnect).equal(autoConnect);
    })

    it('get and set filterNumber of Stethee model object', () => {
        const filterPosition = faker.random.boolean();
        assert.isUndefined(stethee.filterPosition)
        stethee.filterPosition = filterPosition;
        expect(stethee.filterPosition).equal(filterPosition);
    })

    it('get and set filterStatus of Stethee model object', () => {
        const filterStatus = faker.name.findName();
        assert.isUndefined(stethee.filterStatus)
        stethee.filterStatus = filterStatus;
        expect(stethee.filterStatus).equal(filterStatus);
    })

    it('get and set audioGain of Stethee model object', () => {
        const audioGain = faker.name.findName();
        assert.isUndefined(stethee.audioGain)
        stethee.audioGain = audioGain;
        expect(stethee.audioGain).equal(audioGain);
    })

    it('get and set heartBeatLocator of Stethee model object', () => {
        const heartBeatLocator = faker.name.findName();
        assert.isUndefined(stethee.heartBeatLocator)
        stethee.heartBeatLocator = heartBeatLocator;
        expect(stethee.heartBeatLocator).equal(heartBeatLocator);
    })

    it('get and set isHeartBeatLocatorActive of Stethee model object', () => {
        const isHeartBeatLocatorActive = faker.random.boolean();
        assert.isUndefined(stethee.isHeartBeatLocatorActive)
        stethee.isHeartBeatLocatorActive = isHeartBeatLocatorActive;
        expect(stethee.isHeartBeatLocatorActive).equal(isHeartBeatLocatorActive);
    })

    it('get and set defaultFilterNumber of Stethee model object', () => {
        const defaultFilterNumber = faker.name.findName();
        assert.isUndefined(stethee.defaultFilterNumber)
        stethee.defaultFilterNumber = defaultFilterNumber;
        expect(stethee.defaultFilterNumber).equal(defaultFilterNumber);
    })

    it('get and set filterPositions of Stethee model object', () => {
        let filterPositions = {};
        let _arr = [];
        let filter1Name = faker.name.findName();
        let filter2Name = faker.name.findName();
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                _arr.push(filter1Name);
            } else if (i === 1) {
                _arr.push(filter2Name);
            }
        }
        assert.isUndefined(stethee.filterPositions);
        Object.assign(filterPositions, _arr);
        const a = {'0': filter1Name, '1': filter2Name}
        stethee.filterPositions = filterPositions;
        expect(stethee.filterPositions).to.deep.equal(a);
    })
})
