import { Observable } from 'rxjs/internal/Observable';
import { ScanListener, ScanOutput, ScanInputFile, ScanInputFrame, StatusCodes as statusCodes, ScanExchanger, ScanExchangerCodes as scanExchangerCodes, ExportImageTypes as exportImageTypes } from './microblink.SDK.types';
/**
 * NOTE: This is public SDK API, rename of this functions will produce backward incompatible API!
 */
export declare namespace SDK {
    /**
     * Scan image and get result from subscribed observable
     */
    function ScanImage(scanInput: ScanInputFile, uploadProgress?: EventListener): Observable<ScanOutput>;
    /**
     * Register global listener success and/or error callback
     */
    function RegisterListener(scanListener: ScanListener): void;
    /**
     * Push image (file or video frame) to scanning queue, results will be handled by global listener(s)
     */
    function SendImage(scanInput: ScanInputFile | ScanInputFrame, uploadProgress?: EventListener): void;
    /**
     * Set recognizers which will be used in next request
     */
    function SetRecognizers(recognizers: string | string[]): void;
    /**
     * Get recognizers which are defined in the SDK
     */
    /**
     * Set authorization header which will be used in next request
     * @param authorizationHeader is authorization header with apiKey and apiSecret which should be generated
     * here: https://microblink.com/customer/api
     */
    function SetAuthorization(authorizationHeader: string): void;
    /**
     * Get authorization header which is defined in the SDK
     */
    /**
     * Change which images to export for next request
     * @param exportImages is either a boolean flag which describes whether API should return extracted images in next response or an array of API properties
     */
    function SetExportImages(exportImages: boolean | string | string[]): void;
    /**
     * Change which images to export for next request
     * @param exportFullDocumentImage is a boolean flag which describes whether API should return extracted full document image in next response
     */
    function SetExportFullDocumentImage(exportFullDocumentImage: boolean): void;
    /**
     * Change which images to export for next request
     * @param exportSignatureImage is a boolean flag which describes whether API should return extracted signature image in next response
     */
    function SetExportSignatureImage(exportSignatureImage: boolean): void;
    /**
     * Change which images to export for next request
     * @param exportFaceImage is a boolean flag which describes whether API should return extracted face image in next response
     */
    function SetExportFaceImage(exportFaceImage: boolean): void;
    /**
     * Set detect glare option for next request
     * @param detectGlare is a boolean flag which describes whether API should return null for image segments where glare is detected
     */
    function SetDetectGlare(detectGlare: boolean): void;
    /**
     * Set allow blur filter option for next request
     * @param allowBlurFilter is a boolean flag which describes whether API should return null for image segments where blur is detected
     */
    function SetAllowBlurFilter(allowBlurFilter: boolean): void;
    /**
     * Set HTTP API endpoint for next request
     */
    function SetEndpoint(endpoint: string): void;
    /**
     * Set anonymize card number (works on BLINK_CARD recognizer) for next request
     * @param anonymizeCardNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
     */
    function SetAnonymizeCardNumber(anonymizeCardNumber: boolean): void;
    /**
     * Set anonymize IBAN (works on BLINK_CARD recognizer) for next request
     * @param anonymizeIbanNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
     */
    function SetAnonymizeIban(anonymizeIban: boolean): void;
    /**
     * Set anonymize cvv (works on BLINK_CARD recognizer) for next request
     * @param anonymizeCvv is a boolean flag which describes whether API should return a base64 image of the scanned card with the cvv number anonymized
     */
    function SetAnonymizeCvv(anonymizeCvv: boolean): void;
    /**
     * Set anonymize owner (works on BLINK_CARD recognizer) for next request
     * @param anonymizeOwner is a boolean flag which describes whether API should return a base64 image of the scanned card with the owner name anonymized
     */
    function SetAnonymizeOwner(anonymizeOwner: boolean): void;
    /**
     * Set anonymize netherlandsMrz (works on BLINK_CARD recognizer) for next request
     * @param anonymizeNetherlandsMrz is a boolean flag which describes whether API should return a base64 image of the scanned card with the netherlands MRZ anonymized
     */
    function SetAnonymizeNetherlandsMrz(anonymizeNetherlandsMrz: boolean): void;
    /**
     * Terminate all queued HTTP requests.
     * This is useful when images are sending from camera video stream in ms time periods and when successful
     * result is received then all pending requests could be terminated, this should be primary used for application
     * performance improvements, to break all HTTP connections which will return redundant results
     */
    function TerminateRequest(): void;
    /**
     * Set unique user ID which will be stored with uploaded image to associate image with user who uploaded the image
     * @param userId is string user identificator, recommended it to be an user's email because when delete request is sent by this email, all images associated with this email will be permanentally removed if it is stored on upload, not every image will be stored, this depends on other API key options
     */
    function SetUserId(userId: string): void;
    /**
     * When Authorization is not set it is available to disable persiting of uploaded data, by default it is enabled
     * this should be disabled for every page where GDPR is not implemented and this is ability to disable data persisting
     * on some demo pages
     * @param isEnabled is flag which describes should or should not API persist uploaded data, be default it is enabled
     */
    function SetIsDataPersistingEnabled(isEnabled: boolean): void;
    /**
     * Get all SDK status codes
     */
    const StatusCodes: typeof statusCodes;
    /**
     * Create object to exchange data between devices
     * @param data is object with ScanExchanger structure
     */
    function CreateScanExchanger(data: ScanExchanger | undefined, onUpdate: (data: ScanExchanger) => void): any;
    /**
     * Get all Scan exchanger status codes
     */
    const ScanExchangerCodes: typeof scanExchangerCodes;
    /**
     * Get all export image types
     */
    const ExportImageTypes: typeof exportImageTypes;
    /**
     * Decrypt protected object
     * @param dataEncrypted is encrypted object as string
     * @param key is secret key with which data will be decrypted
     */
    function Decrypt(dataEncrypted: string, key: string): any;
    /**
     * Protect plain object
     * @param data is plain object
     * @param key us secret key with which data will be encrypted
     */
    function Encrypt(data: any, key: string): string;
    /**
     * Check if all requirements for desktop-to-mobile feature are available
     */
    function IsDesktopToMobileAvailable(): Promise<boolean>;
    /**
     * Check if any recognizer is set in the recognizers array
     */
    function IsRecognizerArraySet(): boolean;
}
