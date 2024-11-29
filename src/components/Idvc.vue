<template>
  <div id="app">
    <VerificationResultModal ref="resultModal" />
    <div id="videoCapturingEl"></div>
  </div>
</template>

<script>
import IDVC from "@idscan/idvc2";
import { ElMessage } from "element-plus";
import VerificationResultModal from "./VerificationResultModal.vue";
import { verifyApi } from "../api/verify.api.js";


export default {
  name: "App",
  components: {
    VerificationResultModal,
  },
  methods: {},

  mounted: function () {
    const _t = this.$refs;

    let idvc = new IDVC({
      el: "videoCapturingEl",
      captureTimeout: 100,
      // licenseKey: "LICENSE-KEY",
      licenseKey:
        "eyJwZGY0MTdrZXkiOiJVNjZyRmJldkRmXHUwMDJCdXJCL3g0TUdBTHJXZ0" +
        "JlUVZ4NUZ1R1FpS3pGMlJIM0RweXF0MmtHN2Z0RXl6TlpkZEFUOUpMbmVBW" +
        "jlTS25KOGhKUFFLdnNCMWlXZ2c0VkphMUg3aGozak9xRnBDVFBjcU0vMzV4S" +
        "k4yNW1vMjJiY1x1MDAyQlExSU5cdTAwMkJYNjc1MG5oajZTTWdselBEL0tBN" +
        "E9rejZRandmZXJsWlZKeHFuYWtqY0U9IiwiY29tbW9uTGljZW5zZUtleSI6I" +
        "kNGOGlVN0Zpb2pPZndrbnZBZDhQamFoREdacXIxVXB5VlJDUUhxSHRGcUQwW" +
        "C9RRGEzc0xPOFliSFZ4TVx1MDAyQlNsOUhzT3dvYzFzRlJnRWdWMUZCdXY5b" +
        "3hJSlRvSC84SnNzTXMzQWhIUnRjM2RkSFRsNzhwYkl2VTZ1bW84V2xXdEVsW" +
        "llJMTdJZHduSFx1MDAyQlZ2YjU3NXV5SVB1NXQvM0VNQ05Id1ZuN1Z0dzJBV1" +
        "E9IiwiaW1hZ2VQcm9jZXNzaW5nS2V5Ijoibmt2d0ZDbG9TMnJvMkhEb1F3OXN" +
        "2V0lrdnh4dm1ZQkZIOGtURHdTTzhBcUVwWXZDYjZcdTAwMkJOMmhnSWZoV05P" +
        "QlVYNE5VRTJCSGpLV3ovc3dsYkZKV0FqZVF4Y3R5bTFTRGNMTHhVMllsOExxQ" +
        "kJTVWZla1J1Vm45NkQvOHRwSFkzVFZ2VzVRSFpBYUJTc3lTRURJZUd0UFZKaX" +
        "VGaWJJajVoaEJoVm9WNXg0cTg9IiwidHJhY2tTdHJpbmdQYXJzZXJLZXkiOiJ" +
        "uRUhYVE1NMUVYXHUwMDJCRlp0N2thSHFkOUFLRGlBSjlWdXVzcngvRk9YUVx1" +
        "MDAyQjlBVEl0WFJ2bUxzY3pUMkFjQzdEdkpoa29CNldzMG5NN1Uzd0cvbnhJM" +
        "2Z5aVFxMmVXUTlYZXRDTi9ESHpCbTdmZmNoUG84QlFlXHUwMDJCRFBLWmdTL3" +
        "ZkSUc1cDVudnZzTFZNNDZoeDdURGx3Z2g0cm9yMlZoeFF3R0VWamNOVzRZb28" +
        "3TFU9IiwiaU9TTVJaRGV0ZWN0b3JLZXkiOiIwbDVSejNwbGlRN253Q2dcdTAw" +
        "MkJSMW12ck9VVVx1MDAyQmhhNFhMNnN6S3FpL05uT3dYcEQ1V3R0cjVGOVlvN" +
        "nRlWFdlaHdJVkdLTzN3VG5rYWpNWThcdTAwMkJSaXdGTmFoV1dtTkxcdTAwMk" +
        "JVMlliWVAvNWtWUm5Qc0lSbVx1MDAyQklPOUZlN1FoUTFuMGxwbjRnNlUvYlx" +
        "1MDAyQndRV1R5TEliXHUwMDJCbEs4UVRsZVNaTmhtT1BGcUh4MXFmWlZFR052" +
        "ZS9zST0iLCJpT1NQREZEZXRlY3RvcktleSI6ImxNb1BjT2FMbFBoS29Kc050Q" +
        "nFIdEF3Q2NJcktyRGdKIn0=",
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
      documentTypes: [
        {
          type: "ID",
          steps: [
            {
              type: "front",
              name: "Document Front",
              mode: { uploader: true, video: true },
              autocaptureDelay: 500,
              enableDesktopNotification: true,
            },
            {
              type: "pdf",
              name: "Document PDF417 Barcode",
              mode: { uploader: true, video: true },
              autocaptureDelay: 500,
              enableDesktopNotification: true,
            },
            {
              type: "face",
              name: "Face",
              mode: { uploader: true, video: true },
            },
          ],
        },
        {
          type: "Passport",
          steps: [
            {
              type: "mrz",
              name: "Passport Front",
              mode: { uploader: true, video: true },
            },
            {
              type: "face",
              name: "Face",
              mode: { uploader: true, video: true },
            },
          ],
        },
        {
          type: "PassportCard",
          steps: [
            {
              type: "front",
              name: "Passport Card Front",
              mode: { uploader: true, video: true },
            },
            {
              type: "mrz",
              name: "Passport Card Back",
              mode: { uploader: true, video: true },
            },
            {
              type: "face",
              name: "Face",
              mode: { uploader: true, video: true },
            },
          ],
        },
        {
          type: "EmploymentAuthorization",
          steps: [
            {
              type: "front",
              name: "Passport Card Front",
              mode: { uploader: true, video: true },
            },
            {
              type: "mrz",
              name: "Passport Card Back",
              mode: { uploader: true, video: true },
            },
            {
              type: "face",
              name: "Face",
              mode: { uploader: true, video: true },
            },
          ],
        },
        {
          type: "GreenCard",
          steps: [
            {
              type: "front",
              name: "Document Front",
              mode: { uploader: true, video: true },
            },
            {
              type: "mrz",
              name: "Passport Front",
              mode: { uploader: true, video: true },
            },
            {
              type: "face",
              name: "Face",
              mode: { uploader: true, video: true },
            },
          ],
        },
        {
          type: "InternationalId",
          steps: [
            {
              type: "front",
              name: "International ID Front",
              mode: { uploader: true, video: true },
            },
            {
              type: "mrz",
              name: "International ID Back",
              mode: { uploader: true, video: true },
            },
            {
              type: "face",
              name: "Face",
              mode: { uploader: true, video: true },
            },
          ],
        },
        {
          type: "Barcode",
          steps: [
            {
              type: "barcode",
              name: "Document PDF417 Barcode ",
              mode: { uploader: true, video: true },
            },
          ],
        },
      ],

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
      submit(data) {
        console.log(data);
        idvc.showSpinner(true);
        let frontStep, pdfStep, faceStep, mrzStep, photoStep, barcodeStep;
        let frontImage, backImage, faceImage, photoImage, barcodeImage;
        let rawTrackString;
        let captureMethod;
        let verifyFace = true;

        switch (data.documentType) {
          // Driver License and Identification Card

          case 1:
            frontStep = data.steps.find((item) => item.type === "front");
            pdfStep = data.steps.find((item) => item.type === "pdf");
            faceStep = data.steps.find((item) => item.type === "face");

            frontImage = frontStep.img.split(/:image\/(jpeg|png|webp);base64,/)[2];
            backImage = pdfStep.img.split(/:image\/(jpeg|png|webp);base64,/)[2];
            faceImage = faceStep.img.split(/:image\/(jpeg|png|webp);base64,/)[2];

            rawTrackString = pdfStep && pdfStep.trackString ? pdfStep.trackString : "";

            captureMethod =
              JSON.stringify(+frontStep.isAuto) +
              JSON.stringify(+pdfStep.isAuto) +
              JSON.stringify(+faceStep.isAuto);

            break;
          // US and International Passports
          case 2 | 3 | 4 | 5:
            mrzStep = data.steps.find((item) => item.type === "mrz");
            faceStep = data.steps.find((item) => item.type === "face");

            frontImage = mrzStep.img.split(/:image\/(jpeg|png|webp);base64,/)[2];
            faceImage = faceStep.img.split(/:image\/(jpeg|png|webp);base64,/)[2];

            rawTrackString = mrzStep && mrzStep.mrzText ? mrzStep.mrzText : "";

            captureMethod = JSON.stringify(+mrzStep.isAuto) + JSON.stringify(+faceStep.isAuto);

            break;
          // US Passport Cards
          case 3:
          // US Green Cards
          case 6:
          // International IDs with 3 line MRZs
          case 7:
            break;
          case 8:
            break;
          case 9:
            mrzStep = data.steps.find((item) => item.type === "mrz");
            frontImage = mrzStep.img.split(/:image\/(jpeg|png|webp);base64,/)[2];

            rawTrackString = mrzStep && mrzStep.mrzText ? mrzStep.mrzText : "";

            captureMethod = JSON.stringify(+faceStep.isAuto);
            break;
          case 10:
            break;
          case 11:
            barcodeStep = data.steps.find((item) => item.type === "barcode");
            barcodeImage = barcodeStep.img.split(/:image\/(jpeg|png|webp);base64/)[2];

            rawTrackString = barcodeStep && barcodeStep.text ? barcodeStep.text : "";

            captureMethod = JSON.stringify(+barcodeStep.isAuto);

            break;
          default:
        }

        const trackStringArray = rawTrackString.split(".");
        let trackString = trackStringArray[0];
        let barcodeParams = trackStringArray[1];

        let request = {
          documentType: data.documentType,
          frontImageBase64: frontImage,
          backOrSecondImageBase64: backImage,
          faceImageBase64: faceImage,
          trackString: {
            data: trackString,
            barcodeParams: barcodeParams,
          },
          overriddenSettings: {},
          metadata: {},
        };
        verifyApi.verify()
        // fetch("https://dvs2.idware.net/api/v4/verify", {
        //   method: "POST",
        //   headers: {
        //     Authorization: "Bearer sk_cf140831-7c72-4f54-8341-0b78b25b8e06",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(request),
        // })
          .then((response) => {
            console.log("response:", response);
            _t.resultModal.show(response.data)
          })
          .catch((error) => {
            ElMessage.error("Error: " + error.message);
          })
          .finally(() => {
            idvc.showSpinner(false);
          });
      },
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
