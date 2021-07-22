<template>
  <form class="story-add-modal">
    <h2 class="modal-title">New story</h2>
    <textarea
      v-model="txt"
      class="story-text-area"
      placeholder="Write somthing..."
      rows="1"
    ></textarea>

    <img-upload v-if="!imgUrls" @save="saveImg" />
    <img v-else :src="imgUrls" alt="" />
    <button @click.prevent="addStory" class="add-story-btn">
      <img src="../assets/img/check.png" alt="" />
    </button>
  </form>
</template>

<script>
import imgUpload from "../cmps/img-upload.vue";
import { storyService } from "../services/story.service";


export default {
  props: { user: Object },
  data() {
    return {
      storyToAdd: null,
      imgUrls: "",
      txt: "",
    };
  },
  created() {
    this.storyToAdd = storyService.getEmptyStory();
  },
  methods: {
    saveImg(imgUrl) {
      console.log("imgUrl");
      this.imgUrls = imgUrl;
    },
    addStory() {
      this.storyToAdd.txt=this.txt;
      this.storyToAdd.imgUrl=this.imgUrls;
      this.storyToAdd.createdAt=Date.now();
      this.storyToAdd.by= {
        "_id": this.user._id,
        "username": this.user.username,
        "fullname": this.user.fullname,
        "imgUrl": this.user.imgUrl
    }
      console.log(this.storyToAdd);
      this.$emit("addStory",this.storyToAdd);
    },
  },
  components: {
    imgUpload,
  },
};
</script>

<style>
</style>