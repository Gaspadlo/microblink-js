import { IMicroblink } from './microblink.interface';
import { Observable } from 'rxjs/internal/Observable';
import { ScanInputFile, ScanInputFrame, ScanListener, ScanOutput, ScanExchanger } from './microblink.types';
export default class Microblink implements IMicroblink {
    private static fromHowManyFramesQualityCalculateBestFrame;
    private API;
    private recognizers;
    private authorizationHeader;
    private exportImages;
    private exportFullDocumentImage;
    private exportSignatureImage;
    private exportFaceImage;
    private detectGlare;
    private allowBlurFilter;
    private anonymizeNetherlandsMrz;
    private anonymizeCardNumber;
    private anonymizeIban;
    private anonymizeCvv;
    private anonymizeOwner;
    private listeners;
    private scanFrameQueue;
    private endpoint;
    constructor();
    /**
     * Terminate all active requests (pending responses)
     */
    TerminateActiveRequests(): void;
    /**
     * Register global success and/or error listener(s)
     */
    RegisterListener(scanListener: ScanListener): void;
    /**
     * Scan file and get result from subscribed observable
     */
    ScanFile(scanInputFile: ScanInputFile, uploadProgress?: EventListener | undefined): Observable<ScanOutput>;
    /**
     * Push file to SCAN queue, global listener(s) will handle the result
     */
    SendFile(scanInputFile: ScanInputFile, uploadProgress?: EventListener): void;
    /**
     * Push video frame to SCAN queue, global listener(s) will handle the result
     */
    SendFrame(scanInputFrame: ScanInputFrame): void;
    /**
     * Set recognizers which will be used in next SCAN(s)
     */
    SetRecognizers(recognizers: string | string[]): void;
    /**
     * Get defined recognizers
     */
    GetRecognizers(): string | string[];
    /**
     * Set authorization header value to authorize with https://api.microblink.com/recognize
     */
    SetAuthorization(authorizationHeader: string): void;
    /**
     * Get defined authorization header
     */
    GetAuthorization(): string;
    /**
     * Change which images to export for next request
     * @param exportImages is either a boolean flag which describes whether API should return extracted images in next response or an array of API properties
     */
    SetExportImages(exportImages: boolean | string | string[]): void;
    /**
     * Change which images to export for next request
     * @param exportFullDocumentImage is a boolean flag which describes whether API should return extracted full document image in next response
     */
    SetExportFullDocumentImage(exportFullDocumentImage: boolean): void;
    /**
     * Change which images to export for next request
     * @param exportSignatureImage is a boolean flag which describes whether API should return extracted signature image in next response
     */
    SetExportSignatureImage(exportSignatureImage: boolean): void;
    /**
     * Change which images to export for next request
     * @param exportFaceImage is a boolean flag which describes whether API should return extracted face image in next response
     */
    SetExportFaceImage(exportFaceImage: boolean): void;
    /**
     * Set detect glare option for next request
     * @param detectGlare is a boolean flag which describes whether API should return null for image segments where glare is detected
     */
    SetDetectGlare(detectGlare: boolean): void;
    /**
     * Set allow blur filter option for next request
     * @param allowBlurFilter is a boolean flag which describes whether API should return null for image segments where blur is detected
     */
    SetAllowBlurFilter(allowBlurFilter: boolean): void;
    /**
     * Set endpoint for next SCAN(s)
     * Default value is https://api.microblink.com/recognize
     * Endpoint should be changed when backend proxy which is credentials keeper is using as proxy between
     * Microblink SaaS API and frontend application which uses this library.
     */
    SetEndpoint(endpoint: string): void;
    /**
     * Set anonymize card number (works on BLINK_CARD recognizer) for next request
     * @param anonymizeCardNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
     */
    SetAnonymizeCardNumber(anonymizeCardNumber: boolean): void;
    /**
     * Set anonymize IBAN (works on BLINK_CARD recognizer) for next request
     * @param anonymizeIbanNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the IBAN number anonymized
     */
    SetAnonymizeIban(anonymizeIban: boolean): void;
    /**
     * Set anonymize cvv (works on BLINK_CARD recognizer) for next request
     * @param anonymizeCvv is a boolean flag which describes whether API should return a base64 image of the scanned card with the cvv number anonymized
     */
    SetAnonymizeCvv(anonymizeCvv: boolean): void;
    /**
     * Set anonymize owner (works on BLINK_CARD recognizer) for next request
     * @param anonymizeOwner is a boolean flag which describes whether API should return a base64 image of the scanned card with the owner name anonymized
     */
    SetAnonymizeOwner(anonymizeOwner: boolean): void;
    /**
     * Set user identificator which will be stored with uploaded image
     * @param userId is any string which unique identifies user who use SDK and upload any image to API
     */
    SetUserId(userId: string): void;
    /**
     * When Authorization is not set it is available to disable persiting of uploaded data, by default it is enabled
     * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
     * on some demo pages
     * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
     */
    SetIsDataPersistingEnabled(isEnabled: boolean): void;
    /**
     * Set anonymize netherlandsMrz (works on BLINK_CARD recognizer) for next request
     * @param anonymizeNetherlandsMrz is a boolean flag which describes whether API should return a base64 image of the scanned card with the netherlands MRZ anonymized
     */
    SetAnonymizeNetherlandsMrz(anonymizeNetherlandsMrz: boolean): void;
    /**
     * Check is all requirement for desktop-to-mobile feature are available
     */
    IsDesktopToMobileAvailable(): Promise<boolean>;
    /**
     * Check if any recognizer is set in the recognizers array
     */
    IsRecognizerArraySet(): boolean;
    /**
     * Create object for exchange data for scan between devices
     * @param data is object with optional data which will be added to the ScanExchanger object
     */
    CreateScanExchanger(data: ScanExchanger, onChange: (data: ScanExchanger) => void): Promise<any>;
    private isDesktopToMobileAvailable;
    /**
     * Notify all global listeners when success scan is complete
     */
    private notifyOnSuccessListeners;
    /**
     * Notify all global listeners when error happens, HTTP response status code is not equal to 200 or
     * base64 encode failed
     */
    private notifyOnErrorListeners;
    /**
     * Execute scan on Microblink API service
     */
    private scan;
}
