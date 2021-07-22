<template>
  <section class="container">
    <story-list
      :stories="stories"
      :userId="user._id"
      @postComment="postComment"
      @removeStory="removeStory"
      @AddLike="AddLike"
      @removeLike="removeLike"
      @AddCommentLike="AddCommentLike"
      @removeCommentLike="removeCommentLike"
    />
    <button @click="onAddStoryBtn" class="modal-story-btn">
      <img src="../assets/img/add.png" alt="" />
    </button>
    <div v-if="isModalOpen" class="screen">
      <button @click="onCloseScreenBtn" class="close-screen-btn">
        <img src="../assets/img/close.png" alt="" />
      </button>
      <story-add-modal @addStory="addStory" :user="user"/>
    </div>
  </section>
</template>

<script>
import storyAddModal from '../cmps/story-add-modal.vue';
import storyList from "../cmps/story-list.vue";
import { storyService } from "../services/story.service.js";
import {utilService} from "../services/util.service.js"

export default {
  name: "home",
  data() {
    return {
      stories: [],
      user: {
        _id: "u70",
        username: "stewie",
        password: "masha18",
        fullname: "stewie griffin",
        imgUrl:
          "https://spng.subpng.com/20190228/es/kisspng-stewie-griffin-peter-griffin-lois-griffin-brian-gr-homer-duff-pocket-t-shirt-rarestapparel-5c7791349314d2.5454867415513398286025.jpg",
        createdAt: 123543452,
        following: [
          {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "http://some-img",
          },
          {
            _id: "u11",
            fullname: "bel",
            imgUrl: "http://some-img",
          },
        ],
        followers: [
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img",
          },
        ],
        savedStoryIds: ["s70", "s73"],
      },
      isModalOpen: false,
    };
  },
  computed: {},
  created() {
    this.loadStories();
  },
  methods: {
    loadStories() {
      storyService.query().then((stories) => {
        this.stories = stories.reverse();
        console.log(stories);
      });
    },
    removeStory(storyId) {
      storyService.remove(storyId).then(this.loadStories);
    },
    AddLike(storyId) {
      let likedStory = this.stories.filter((story) => storyId === story._id)[0];
      likedStory.likedBy.push({
        fullname: this.user.fullname,
        imgUrl: this.user.imgUrl,
        _id: this.user._id,
      });
       storyService.save(likedStory)
      //  .then(this.loadStories);
    },
    removeLike(storyId) {
      let unlikedStory = this.stories.filter((story) => storyId === story._id)[0];
    const idx = unlikedStory.likedBy.findIndex(user => user._id === this.user._id)
     unlikedStory.likedBy.splice(idx, 1) 
     const foundIdx = this.stories.findIndex(story => story._id === storyId)
      console.log(this.stories[foundIdx].likedBy, 'from addlike')
     storyService.save(unlikedStory)
    //  .then(this.loadStories());
    },
    AddCommentLike(storyId,commentId){
    let storyComment = this.stories.filter((story) => storyId === story._id)[0];
    const idx = storyComment.comments.findIndex((comment) => comment.id===commentId)
    storyComment.comments[idx].likedBy.push({
      fullname: this.user.fullname,
        imgUrl: this.user.imgUrl,
        _id: this.user._id,
      });
       storyService.save(storyComment)
    },
    removeCommentLike(storyId,commentId){
      console.log('home');
    let storyComment = this.stories.filter((story) => storyId === story._id)[0];
    const idx = storyComment.comments.findIndex((comment) => comment.id===commentId)
    console.log(idx);
    const userIdx = storyComment.comments[idx].likedBy.findIndex((user) => user._id===this.user._id)
    storyComment.comments[idx].likedBy.splice(userIdx, 1) 
       storyService.save(storyComment)
    },
    postComment( storyId,CommentTxt){
      let story = this.stories.filter((story) => storyId === story._id)[0];
      story.comments.push(
        {
          "id": utilService.makeId(),
            "by": {
                "_id":this.user._id,
                "fullname": this.user.fullname,
                "imgUrl":this.user.imgUrl,
            },
            "txt": CommentTxt,
            "likedBy":[]
        });
       storyService.save(story)
    },
    addStory(newStory){
      console.log(newStory);
       storyService.save(newStory).then(this.loadStories);
       this.isModalOpen = false;
      
    },
    onAddStoryBtn() {
      this.isModalOpen = true;
    },
    onCloseScreenBtn() {
      this.isModalOpen = false;
    },
  },
  components: {
    storyAddModal,
    storyList,
  },
};
</script>
