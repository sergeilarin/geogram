<template>
  <div class="img-upload-container">
    <template v-if="!isLoading">
      <!-- UPLOAD IMG -->
      <label
        for="imgUploader"
        @drop.prevent="handleFile"
        @dragover.prevent="isDragOver = true"
        @dragleave="isDragOver = false"
        :class="{ drag: isDragOver }"
      >
        <img
          v-if="!isDragOver"
          src="https://www.lifewire.com/thmb/P856-0hi4lmA2xinYWyaEpRIckw=/1920x1326/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
          alt=""
        />

        <h3 v-else>Drop image here</h3>
      </label>

      <!-- HIDDEN INPUT -->
      <input
        type="file"
        name="img-uploader"
        id="imgUploader"
        @change="handleFile"
      />
    </template>

    <!-- LOADER -->
    <img
      class="loader"
      v-else
      src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      alt=""
    />
  </div>
</template>

<script>
import { uploadImg } from "@/services/img-upload.service.js";
export default {
  data() {
    return {
      isLoading: false,
      isDragOver: false,
    };
  },
  methods: {
    dragOver(ev) {
      this.isDragOver = true;
    },
    handleFile(ev) {
      let file;
      if (ev.type === "change") file = ev.target.files[0];
      else if (ev.type === "drop") file = ev.dataTransfer.files[0];
      this.onUploadImg(file);
    },

    async onUploadImg(file) {
        console.log('hy');
      this.isLoading = true;
      this.isDragOver = false;
      const res = await uploadImg(file);
      this.$emit("save", res.url);
      this.isLoading = false;
    },
  },
};
</script>
