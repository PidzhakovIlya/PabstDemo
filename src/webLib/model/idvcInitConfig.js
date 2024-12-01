import {getDocumentTypes} from "./getDocumentTypes.js";
import config, {getCurrentDomain} from "../../../config/config.js";



const currentDomain = getCurrentDomain();

const currentConfig = config.domains[currentDomain] || config.default;
console.log('config:', currentConfig)
export const idvcInitConfig = {
        el: "videoCapturingEl",
        captureTimeout: 100,
        // licenseKey: "LICENSE-KEY",
        licenseKey: currentConfig.WEB_LIB_LICENSE_KEY,
        networkUrl: "networks",
        resizeUploadedImage: 1600,
        fixFrontOrientAfterUpload: true,
        autoContinue: true,
        isShowDocumentTypeSelect: true,
        realFaceMode: "all",
        useCDN: true,
        language: "en",
        allowSubmitWithWarnings: true,
        autoStart: false,
        chunkPublicPath: "network",
        autocaptureDelay: 500,
        playPreviewAnimations: true,
        processingImageFormat: "webp",
        showSubmitBtn: true,
        isShowGuidelinesButton: true,
        documentTypes: getDocumentTypes(),
        onChange(data) {
                console.log("on change", data);
        },
        onCameraError(data) {
                console.log("camera error", data);
        },
        onReset(data) {
                console.log("on reset", data);
        },
        onRetakeHook(data) {
                console.log("retake hook", data);
        },
        clickGuidlines() {
                console.log("click Guidelines");
        },
        onMounted() {
                console.log("Mounted");
        },
        onCaptureTimeout(data) {
                console.log("CaptureTimeout", data);
        },
}

function extractImage(step) {
        return step ? step.img.split(/:image\/(jpeg|png|webp);base64,/)[2] : null;
}

function findStepByType(steps, type) {
        return steps.find((item) => item.type === type);
}

function getCaptureMethod(steps) {
        return steps.map((step) => JSON.stringify(+step.isAuto)).join("");
}

export function extractDataForSubmit(documentType, steps) {
        let frontStep, pdfStep, faceStep, mrzStep, photoStep, barcodeStep,
            frontImage, backImage, faceImage, photoImage, barcodeImage,
            rawTrackString,
            captureMethod;
        let verifyFace = true;

        switch (documentType) {
                case 1:
                        frontStep = findStepByType(steps, "front");
                        pdfStep = findStepByType(steps, "pdf");
                        faceStep = findStepByType(steps, "face");

                        frontImage = extractImage(frontStep);
                        backImage = extractImage(pdfStep);
                        faceImage = extractImage(faceStep);

                        rawTrackString = pdfStep && pdfStep.trackString ? pdfStep.trackString : "";
                        captureMethod = getCaptureMethod([frontStep, pdfStep, faceStep]);
                        break;

                case 2:
                        mrzStep = findStepByType(steps, "mrz");
                        faceStep = findStepByType(steps, "face");

                        frontImage = extractImage(mrzStep);
                        faceImage = extractImage(faceStep);

                        rawTrackString = mrzStep && mrzStep.mrzText ? mrzStep.mrzText : "";
                        captureMethod = getCaptureMethod([mrzStep, faceStep]);
                        break;
                case 3:
                        // US Passport Cards
                        break;
                case 6:
            //   US Green Cards
                case 7:
                        // International IDs with 3 line MRZs
                        break;
                case 8:
                        // VIN
                        break;
                case 9:
                        mrzStep = findStepByType(steps, "mrz");
                        frontImage = extractImage(mrzStep);

                        rawTrackString = mrzStep && mrzStep.mrzText ? mrzStep.mrzText : "";
                        captureMethod = getCaptureMethod([mrzStep]);
                        break;

                case 10:
                        break;

                case 11:
                        barcodeStep = findStepByType(steps, "barcode");
                        barcodeImage = extractImage(barcodeStep);

                        rawTrackString = barcodeStep && barcodeStep.text ? barcodeStep.text : "";
                        captureMethod = getCaptureMethod([barcodeStep]);
                        break;

                default:
                        break;
        }

        return {frontImage, backImage, faceImage, barcodeImage, rawTrackString, captureMethod};
}
