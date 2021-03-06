/**
 * Preferred type of camera to be used when opening the camera feed.
 */
export declare enum PreferredCameraType {
    /** Prefer back facing camera */
    BackFacingCamera = 0,
    /** Prefer front facing camera */
    FrontFacingCamera = 1
}
/**
 * Explanation why VideoRecognizer has failed to open the camera feed.
 */
export declare enum NotSupportedReason {
    /** navigator.mediaDevices.getUserMedia is not supported by current browser for current context. */
    MediaDevicesNotSupported = "MediaDevicesNotSupported",
    /** Camera with requested features is not available on current device. */
    CameraNotFound = "CameraNotFound",
    /** Camera access was not granted by the user. */
    CameraNotAllowed = "CameraNotAllowed",
    /** Unable to start playing because camera is already in use. */
    CameraInUse = "CameraInUse",
    /** Camera is currently not available due to a OS or hardware error. */
    CameraNotAvailable = "CameraNotAvailable"
}
/**
 * The error object thrown when VideoRecognizer fails to open the camera feed.
 */
export declare class CameraManagerError extends Error {
    /** The reason why opening the camera failed. */
    readonly reason: NotSupportedReason;
    constructor(reason: NotSupportedReason, ...params: any[]);
}
/**
 * Creates a new VideoRecognizer by opening a camera stream and attaching it to given HTMLVideoElement. If camera cannot be accessed,
 * the returned promise will be rejected.
 * @param cameraFeed HTMLVideoELement to which camera stream should be attached
 * @param preferredCameraType Whether back facing or front facing camera is preferred. Obeyed only if there is a choice (i.e. if device has only front-facing camera, the opened camera will be a front-facing camera, regardless of preference)
 */
export declare function cameraManager(cameraFeed: HTMLVideoElement, preferredCameraType?: PreferredCameraType): Promise<HTMLVideoElement>;
