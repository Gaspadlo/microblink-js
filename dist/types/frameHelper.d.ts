/**
 * Helper for get detailed information from the frame of the image as RAW pixels array, with defined width and height
 */
export declare class FrameHelper {
    /**
     * Get frame quality
     * @param pixelData is ImageData from `canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height)`
     */
    static getFrameQuality(pixelData: ImageData): number;
    /**
     * Calculate frame quality
     * @param rgbaImgData is an RGB array (3n)=>RED, (3n+1)=>GREEN, (3n+2)=>BLUE, where n is pixel index in 2D grid
     * @param width is the frame horizontal dimension in pixels
     * @param height is the frame vertical dimension in pixels
     */
    private static calculateFrameQuality;
    /**
     * Get pixel intensity
     * @param rgbaImgData is an RGB array (3n)=>RED, (3n+1)=>GREEN, (3n+2)=>BLUE, where n is pixel index in 2D grid
     * @param row is an row of the pixel in the frame
     * @param col is na column of the pixel in the frame
     * @param width is the frame horizontal dimension in pixels
     */
    private static getIntensity;
}
