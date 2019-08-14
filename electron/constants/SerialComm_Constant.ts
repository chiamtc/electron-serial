export default class SerialComm_Constant {
    //SerialPort
    static BAUDRATE = 9600;

    //SRC label
    static GET_OPS = 'SRC:get-ops';
    static SET_OPS = 'SRC:set-ops';

    //Operation type
    static GET = 'GET';
    static SET = 'SET';
    static EVENT = 'EVENT';

    //used in conversion function - SerialCommUtil.ts
    static HEX = 16;
    static DECIMAL = 10;
    static BINARY = 2;
    static ONE_TWENTY_EIGHT = 128;
    static ZERO = '0';
    static FOUR = '4';
    static EIGHT = '8';

    //used in read() - SerialCommunication.ts
    static STARTBYTE_HEX = 'FE';
    static CHECKSUM_HEX = '0D';
    static ENDBYTE_HEX = '0A';

    // used in parseCommand() - Serializer.tseader.ts
    static EVENT_COMMAND_BIN = '00';
    static GET_COMMAND_BIN = '01';
    static SET_COMMAND_BIN = '10';

    //[GET] - Serial comm parameter in HEX
    static PRODUCT_NAME = '40';
    static PRODUCT_MODEL_NUMBER = '41';
    static PRODUCT_SERIAL_NUMBER = '42';
    static BLUETOOTH_NAME = '43';
    static SOFTWARE_VER = '44';
    static HARDWARE_VER = '45';
    static STATE_OF_OPS = '46';
    static HEADSET_MAC = '47';
    static FILTERS_ID = '48';
    static HEADSET_NAME = '49';

    //[SET] - Serial comm parameter in HEX;
    static BLUETOOTH_NAME_SET = '83';
    static STATE_OF_OPS_SET = '86';
    static HEADSET_MAC_SET = '87';
    static HEADSET_NAME_SET = '89';

    //[EVENT] - Serial comm parameter in HEX
    static SOFTWARE_VER_EVENT = '04';
    static STATE_OF_OPS_EVENT = '06';
    static FILTERS_ID_EVENT = '08';


    //State of Operation - bit shifting binary - first recording byte
    static BIN_3F = '00111111';

    //State of Operation - bit shifting position - first recording byte
    static POS_3F = 0;

    //State of Operation - bit shifting binary - first byte
    static BIN_C0 = '11000000';
    static BIN_3C = '00111100';
    static BIN_02 = '00000010';
    static BIN_01 = '00000001';

    //State of Operation - bit shifting position - first byte
    static POS_C0 = 6;
    static POS_3C = 2;
    static POS_02 = 1;
    static POS_01 = 0;

    //State of Operation - bit shiting binary - second byte
    static BIN_E0 = '11100000';
    static BIN_10 = '00010000';
    static BIN_0E = '00001110';
    //static BIN_01 = '00000001'; duplicated from first byte

    //State of Operation - bit shifting position - second byte
    static POS_E0 = 5;
    static POS_10 = 4;
    static POS_0E = 1;
    // static POS_01 = 0; duplicated from first byte

    //State of Operation - STATUS
    static STATE_OFF = 0;
    static OFF = 'OFF';
    static STATE_ON = 1;
    static ON = 'ON';
    static STATE_STR = 2;
    static STR = 'STREAMING'
    static STATE_CHG = 3;
    static CHG = 'CHARGING';

    //State of Operation - BATTERY Index
    static BATTERY_INDEX_NODATA = 0;
    static BATTERY_INDEX_ONE = 1;
    static BATTERY_INDEX_TWO = 2;
    static BATTERY_INDEX_FIVE = 3;
    static BATTERY_INDEX_TEN = 4;
    static BATTERY_INDEX_FIFTEEN = 5;
    static BATTERY_INDEX_TWENTY = 6;
    static BATTERY_INDEX_TWENTY_FIVE = 7;
    static BATTERY_INDEX_THIRTY = 8;
    static BATTERY_INDEX_FORTY = 9;
    static BATTERY_INDEX_FIFTY = 10;
    static BATTERY_INDEX_SIXTY = 11;
    static BATTERY_INDEX_SEVENTY = 12;
    static BATTERY_INDEX_EIGHTY = 13;
    static BATTERY_INDEX_NINTY = 14;
    static BATTERY_INDEX_HUNDRED = 15;

    static BATTERY_LVL_NODATA = 0;
    static BATTERY_LVL_ONE = 1;
    static BATTERY_LVL_TWO = 2;
    static BATTERY_LVL_FIVE = 5;
    static BATTERY_LVL_TEN = 10;
    static BATTERY_LVL_FIFTEEN = 15;
    static BATTERY_LVL_TWENTY = 20;
    static BATTERY_LVL_TWENTY_FIVE = 25;
    static BATTERY_LVL_THIRTY = 30;
    static BATTERY_LVL_FORTY = 40;
    static BATTERY_LVL_FIFTY = 50;
    static BATTERY_LVL_SIXTY = 60;
    static BATTERY_LVL_SEVENTY = 70;
    static BATTERY_LVL_EIGHTY = 80;
    static BATTERY_LVL_NINTY = 90;
    static BATTERY_LVL_HUNDRED = 100;

    static AUDIO_GAIN_INDEX_ZERO = 0;
    static AUDIO_GAIN_INDEX_ONE = 1;
    static AUDIO_GAIN_INDEX_TWO = 2;
    static AUDIO_GAIN_INDEX_THREE = 3;
    static AUDIO_GAIN_INDEX_FOUR = 4;
    static AUDIO_GAIN_INDEX_FIVE = 5;
    static AUDIO_GAIN_INDEX_SIX = 6;
    static AUDIO_GAIN_INDEX_SEVEN = 7;

    static AUDIO_GAIN_ONE = 1;
    static AUDIO_GAIN_TWO = 2;
    static AUDIO_GAIN_THREE = 3;
    static AUDIO_GAIN_FOUR = 4;
    static AUDIO_GAIN_FIVE = 5;
    static AUDIO_GAIN_SIX = 6;
    static AUDIO_GAIN_SEVEN = 7;
    static AUDIO_GAIN_EIGHT= 8;

    //State of Operation - HD
    static HEADSET_CONNECTED = 'Headset Connected';
    static HEADSET_DISCONNECTED = 'Headset Not Connected';

    //State of Operation - AC -used to be in processAC()
    static AUTO_CONNECT = '1';
    static AUTO_DISCONNECT = '0';

    //Set Ops - Error Type
    static SET_OPS_ERROR = new Map()
        .set(0, 'Good')
        .set(1, 'Syntax Error')
        .set(2, 'Authentication Error')
        .set(3, 'Invalid Checksum')
        .set(4, 'Invalid Function')
        .set(5, 'Function Not Available')
        .set(6, 'Invalid Parameter')
        .set(7, 'Parameter Not Available ')
        .set(8, 'Invalid Data Length')
        .set(9, 'Invalid Data Type')
        // .set(10, 'Syntax Error') Reserved
        .set(11, 'No Data Available')
        .set(12, 'Invalid Data Value')
        // .set(13, 'Syntax Error') Reserved
        .set(14, 'No Get Function Available On This Parameter')
        .set(15, 'No Set Function Available On This Parameter')
        .set(16, 'No Stream Function Available On This Parameter')
        .set(17, 'Invalid Request')
        .set(18, 'No Data Part Received')
        .set(19, 'Data Incomplete')
        .set(20, 'DFU, Not in Charging Mode')
        .set(21, 'DFU, No Switch Pressed')
        .set(22, 'DFU, Aborted Due to Timeout')
        .set(23, 'DFU, Aborted Due to Charging Power Lost')
        .set(24, 'DFU, Aborted Due to App Command')
        .set(25, 'Unknown Error 25')
        .set(26, 'Unknown Error 26')
        .set(27, 'Unknown Error 27')
        .set(28, 'Unknown Error 28')
        .set(29, 'Unknown Error 29')
        .set(30, 'Unknown Error 30')
        .set(31, 'Unknown Error 31');
}
