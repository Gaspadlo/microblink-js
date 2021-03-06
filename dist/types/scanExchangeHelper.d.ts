import { ScanExchanger } from './microblink.types';
export declare class ScanExchangeHelper {
    /**
     * Create Firestore object for scan data exchanging
     * @param data is optional object with data which will be added to the created Firestore object
     */
    static createScanExchanger(data?: ScanExchanger): Promise<ScanExchanger>;
    /**
     * Generate QR code as base64 image for specific URL
     * @param url is string
     */
    static generateQRCode(url: string): Promise<string>;
}
