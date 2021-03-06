export declare class CryptoHelper {
    static encrypt(data: any, secretKey: string): string;
    static decrypt(cipherText: string, secretKey: string): any;
    static randomString(stringLength?: number): string;
}
