declare module 'react-native-nordic-dfu' {

  export interface UUIDHelper {
    secureDFUService: string,
    secureDFUControlPoint: string,
    secureDFUPacket: string,
    buttonlessService: string,
    buttonlessCharacteristic: string
  }

  export class NordicDFU {
    static startDFU({
      deviceAddress,
      deviceName,
      filePath,
      uuidHelper: UUIDHelper
    }: {
      deviceAddress: string;
      deviceName?: string;
      filePath: string | null;
      uuidHelper: UUIDHelper;
    }): Promise<string>;
  }

  export interface IDfuUpdate {
    percent?: number;
    currentPart?: number;
    partsTotal?: number;
    avgSpeed?: number;
    speed?: number;
    state?: string;
  }

  export class DFUEmitter {
    static addListener(
      name: 'DFUProgress' | 'DFUStateChanged',
      handler: (update: IDfuUpdate) => void
    ): void;

    static removeAllListeners(name: 'DFUProgress' | 'DFUStateChanged'): void;
  }
}
