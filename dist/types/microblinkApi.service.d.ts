import { IMicroblinkApi } from './microblinkApi.interface';
import { Observable } from 'rxjs/internal/Observable';
/**
 * HTTP layer with Microblink API
 */
export default class MicroblinkApi implements IMicroblinkApi {
    private authorizationHeader;
    private exportImages;
    private exportFullDocumentImage;
    private exportSignatureImage;
    private exportFaceImage;
    private detectGlare;
    private endpoint;
    private anonymizeCardNumber;
    private anonymizeIban;
    private anonymizeCvv;
    private anonymizeOwner;
    private allowBlurFilter;
    private anonymizeNetherlandsMrz;
    private activeRequests;
    private userId;
    private isDataPersistingEnabled;
    constructor();
    /**
     * Terminate request session with aborting all pending responses
     */
    TerminateAll(): void;
    /**
     * Change authorization header value
     */
    SetAuthorization(authorizationHeader: string): void;
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
     * Change API endpoint
     * @param endpoint is API endpoint where Microblink API or Microblink API proxy is available
     */
    SetEndpoint(endpoint: string): void;
    /**
     * Set anonymize card number (works on BLINK_CARD recognizer) for next request
     * @param anonymizeCardNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
     */
    SetAnonymizeCardNumber(anonymizeCardNumber: boolean): void;
    /**
     * Set anonymize card number (works on BLINK_CARD recognizer) for next request
     * @param anonymizeIbanNumber is a boolean flag which describes whether API should return a base64 image of the scanned card with the card number anonymized
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
     * When Authorization is not set it is available to disable persisting of uploaded data, by default it is enabled
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
     * Execute remote recognition
     * @param recognizers is string or array of strings on which image will be processed
     * @param imageBase64 is Base64 encoded image which should contain document for processing
     * @param uploadProgress (optional) is XHR event listener for image upload to show upload progress bar on UI
     */
    Recognize(recognizers: string | string[], imageBase64: string, uploadProgress?: EventListener): Observable<any>;
    /**
     * Authorization header offline validator, just check for Authorization header format before sending it to the API
     */
    private get isAuthorizationHeaderValid();
}
