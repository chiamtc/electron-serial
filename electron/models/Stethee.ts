import SerialCommUtil from "../utils/SerialCommUtil";

export default class Stethee {
    private _productName: string;
    private _productModelNumber: string;
    private _productSerialNumber: string;
    private _recordTimeout: string;
    private _bluetoothName: string;
    private _softwareVersion: string;
    private _hardwareVersion: string;
    private _headsetMacAddr: string;
    private _headsetName: string;
    private _operationState: string;
    private _batteryLevel: string;
    private _headsetConnected: string;
    private _isHeadsetConnected: boolean;
    private _autoConnect: boolean;
    private _filterPosition: number; //revise -SoOps
    private _filterStatus: boolean; //revise - SoOps
    private _audioGain: number;
    private _heartBeatLocator: boolean;
    private _isHeartBeatLocatorActive: boolean;
    private _filterSelectStatus: string; //the byte of the filterIDs 0x08, not processed yet
    private _defaultFilterNumber: string; //product of processed filterStatus
    private _activeFilterNumber: string; //product of processed filterStatus
    private _filterPositions: object;

    constructor() {
    }

    get productName(): string {
        return this._productName;
    }

    set productName(value: string) {
        this._productName = value;
    }

    get productModelNumber(): string {
        return this._productModelNumber;
    }

    set productModelNumber(value: string) {
        this._productModelNumber = value;
    }

    get productSerialNumber(): string {
        return this._productSerialNumber;
    }

    set productSerialNumber(value: string) {
        this._productSerialNumber = value;
    }

    get recordTimeout(): string {
        return this._recordTimeout;
    }

    set recordTimeout(value: string) {
        this._recordTimeout = value;
    }

    get bluetoothName(): string {
        return this._bluetoothName;
    }

    set bluetoothName(value: string) {
        this._bluetoothName = value;
    }

    get softwareVersion(): string {
        return this._softwareVersion;
    }

    set softwareVersion(value: string) {
        this._softwareVersion = value;
    }

    get hardwareVersion(): string {
        return this._hardwareVersion;
    }

    set hardwareVersion(value: string) {
        this._hardwareVersion = value;
    }

    get headsetConnected(): string {
        return this._headsetConnected;
    }

    set headsetConnected(value: string) {
        this._headsetConnected = value;
    }

    get headsetMacAddr(): string {
        return this._headsetMacAddr;
    }

    set headsetMacAddr(value: string) {
        this._headsetMacAddr = value;
    }

    get headsetName(): string {
        return this._headsetName;
    }

    set headsetName(value: string) {
        this._headsetName = value;
    }

    get operationState(): string {
        return this._operationState;
    }

    set operationState(value: string) {
        this._operationState = value;
    }

    get batteryLevel(): string {
        return this._batteryLevel;
    }

    set batteryLevel(value: string) {
        this._batteryLevel = value;
    }

    get isHeadsetConnected(): boolean {
        return this._isHeadsetConnected;
    }

    set isHeadsetConnected(value: boolean) {
        this._isHeadsetConnected = value;
    }

    get autoConnect(): boolean {
        return this._autoConnect;
    }

    set autoConnect(value: boolean) {
        this._autoConnect = value;
    }

    get filterPosition(): number {
        return this._filterPosition;
    }

    set filterPosition(value: number) {
        this._filterPosition = value;
    }

    get filterStatus(): boolean {
        return this._filterStatus;
    }

    set filterStatus(value: boolean) {
        this._filterStatus = value;
    }

    get audioGain(): number {
        return this._audioGain;
    }

    set audioGain(value: number) {
        this._audioGain = value;
    }

    get heartBeatLocator(): boolean {
        return this._heartBeatLocator;
    }

    set heartBeatLocator(value: boolean) {
        this._heartBeatLocator = value;
    }

    get isHeartBeatLocatorActive(): boolean {
        return this._isHeartBeatLocatorActive;
    }

    set isHeartBeatLocatorActive(value: boolean) {
        this._isHeartBeatLocatorActive = value;
    }

    get filterSelectStatus(): string {
        return this._filterSelectStatus;
    }

    set filterSelectStatus(value: string) {
        this._filterSelectStatus = value;
    }

    get defaultFilterNumber(): string {
        return this._defaultFilterNumber;
    }

    set defaultFilterNumber(value: string) {
        this._defaultFilterNumber = value;
    }

    get activeFilterNumber(): string {
        return this._activeFilterNumber;
    }

    set activeFilterNumber(value: string) {
        this._activeFilterNumber = value;
    }

    get filterPositions(): object {
        return this._filterPositions;
    }

    set filterPositions(value: object) {
        this._filterPositions = value;
    }

    processDefaultAndActiveFilters():void{
        const defaultFilter = parseInt(this.filterSelectStatus[0]);
        const activeFilter = parseInt(this.filterSelectStatus[1]);

        //not sure if I should do this, but hey..it works. https://stackoverflow.com/questions/32968332/how-do-i-prevent-the-error-index-signature-of-object-type-implicitly-has-an-an
        this._defaultFilterNumber = (<any>this.filterPositions)[defaultFilter];
        this._activeFilterNumber = (<any>this.filterPositions)[activeFilter];
    }
}
