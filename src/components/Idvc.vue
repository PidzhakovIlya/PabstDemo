<template>
  <div id="app">
    <VerificationResultModal ref="resultModal"/>
    <div id="videoCapturingEl"></div>
  </div>
</template>

<script>
import IDVC from "@idscan/idvc2";
import {ElMessage} from "element-plus";
import VerificationResultModal from "./VerificationResultModal.vue";
import {verifyApi} from "../api/verify.api.js";
import { extractDataForSubmit, idvcInitConfig} from "../webLib/model/idvcInitConfig.js";


export default {
  name: "App",
  components: {
    VerificationResultModal,
  },
  methods: {},

  mounted: function () {
    const _t = this.$refs;


    let idvc = new IDVC({
      ...idvcInitConfig,

      submit(data) {
        console.log(data);
        idvc.showSpinner(true);

        const {documentType, steps} = data;
        const {
          frontImage,
          backImage,
          faceImage,
          barcodeImage,
          rawTrackString,
          captureMethod
        } = extractDataForSubmit(documentType, steps);

        const trackStringArray = rawTrackString.split(".");
        let trackString = trackStringArray[0];
        let barcodeParams = trackStringArray[1];

        let request = {
          documentType,
          frontImageBase64: frontImage,
          backOrSecondImageBase64: backImage,
          faceImageBase64: faceImage,
          trackString: {
            data: trackString,
            barcodeParams,
          },
          overriddenSettings: {},
          metadata: {},
        };
        verifyApi.verify(request)
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

</style>
