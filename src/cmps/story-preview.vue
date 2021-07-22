<template>
  <article class="story-preview">
    <div class="story-header">
      <div class="user-link">
        <router-link class="user-avatar" :to="'/user/' + story.by._id"
          ><img :src="story.by.imgUrl" alt="profil pic"
        /></router-link>
        <router-link :to="'/user/' + story.by._id"
          ><span class="user-name">{{ story.by.username }}</span></router-link
        >
      </div>
      <button class="story-delete-btn" @click.prevent="removeStory(story._id)">
        Delete
      </button>
      <button class="story-header-btn">
        <img src="../assets/img/dots.png" alt="" />
      </button>
    </div>
    <img :src="story.imgUrl" alt="story img" class="story-img" />
    <div class="story-content">
      <div class="story-action">
        <button v-if="!isLike" @click.prevent="AddLike(story._id)">
          <img src="../assets/img/heart.png" />
        </button>
        <button v-else @click.prevent="removeLike(story._id)">
          <img src="../assets/img/heart-fill.png" />
        </button>
        <button><img src="../assets/img/topic.png" alt="" /></button>
        <button>
          <router-link to="/chat"
            ><img src="../assets/img/send.png" alt=""
          /></router-link>
        </button>
        <button>
          <img
            v-if="!isMarked"
            @click="onMark"
            src="../assets/img/bookmark.png"
            alt=""
          />
          <img
            v-else
            @click="onMark"
            src="../assets/img/bookmark-fill.png"
            alt=""
          />
        </button>
      </div>
      <button class="likes">{{ story.likedBy.length }} likes</button>
      <div class="story-txt">
        <div>
          <span
            ><router-link :to="'/user/' + story.by._id"
              ><span class="user-name">{{
                story.by.username
              }}</span></router-link
            ></span
          >
          {{ story.txt }}
        </div>
      </div>
      <button v-if="story.comments.length" class="comments">
        View all {{ story.comments.length }} comments
      </button>
      <div>
        <div  v-if="story.comments.length" class="story-txt">
          <div>
            <span
              ><router-link :to="'/user/' + story.by._id"
                ><span class="user-name">{{
                  story.comments[story.comments.length - 2].by.fullname
                }}</span></router-link
              ></span
            >
            {{ story.comments[story.comments.length - 2].txt }}
          </div>
          <button
            v-if="!isLikeComment"
            @click.prevent="AddCommentLike(story._id, 2)"
          >
            <img src="../assets/img/heart.png" alt="" />
          </button>
          <button v-else @click.prevent="removeCommentLike(story._id, 2)">
            <img src="../assets/img/heart-fill.png" alt="" />
          </button>
        </div>
        <div v-if="story.comments.length" class="story-txt">
          <div>
            <span
              ><router-link :to="'/user/' + story.by._id"
                ><span class="user-name">{{
                  story.comments[story.comments.length - 1].by.fullname
                }}</span></router-link
              ></span
            >
            {{ story.comments[story.comments.length - 1].txt }}
          </div>
          <button
            v-if="!isLastComment"
            @click.prevent="AddCommentLike(story._id, 1)"
          >
            <img src="../assets/img/heart.png" alt="" />
          </button>
          <button v-else @click.prevent="removeCommentLike(story._id, 1)">
            <img src="../assets/img/heart-fill.png" alt="" />
          </button>
        </div>
        <div class="story-published-time">
          <span>{{ story.createdAt | moment("from", "now") }}</span>
        </div>
      </div>
    </div>
    <form class="story-comment">
      <div class="emoji-container" v-if="isEmojiPickerOpen" @click.self="onEmojiPicker">
      </div>
      <VEmojiPicker v-if="isEmojiPickerOpen" @select="selectEmoji" />
      <button
        @click.prevent="onEmojiPicker"
        class="emoji-btn"
      >
        <img src="../assets/img/smile.png" alt="" />
      </button>
      <textarea
        placeholder="Add a comment..."
        v-model="txt"
        class="comment-input"
      ></textarea>
      <button
        type="submit"
        @click.prevent="onPost(story._id)"
        class="story-comment-btn"
      >
        Post
      </button>
    </form>
  </article>
</template>

<script>
import { VEmojiPicker } from "v-emoji-picker";
export default {
  props: { story: Object, userId: String },
  data() {
    return {
      txt: "",
      isLike: null,
      isLastComment: false,
      isLikeComment: false,
      isMarked: false,
      isEmojiPickerOpen: false,
    };
  },
  methods: {
    removeStory(storyId) {
      this.$emit("removeStory", storyId);
    },
    AddLike(storyId) {
      this.$emit("AddLike", storyId);
      this.userLike();
    },
    removeLike(storyId) {
      this.$emit("removeLike", storyId);
      this.userLike();
    },
    AddCommentLike(storyId, idx) {
      console.log(storyId, idx);
      this.$emit(
        "AddCommentLike",
        storyId,
        this.story.comments[this.story.comments.length - idx].id
      );
      idx === 1
        ? (this.isLastComment = !this.isLastComment)
        : (this.isLikeComment = !this.isLikeComment);
    },
    removeCommentLike(storyId, idx) {
      console.log('remove',storyId, idx);
      // console.log(this.story.comments[this.story.comments.length - idx].id);
      this.$emit(
        "removeCommentLike",
        storyId,
        this.story.comments[this.story.comments.length - idx].id
      );
      idx === 1
        ? (this.isLastComment = !this.isLastComment)
        : (this.isLikeComment = !this.isLikeComment);
    },
    userLike() {
      let idx = this.story.likedBy.findIndex(
        (user) => user._id === this.userId
      );
      this.isLike = idx !== -1 ;
    },
    userCommentLike() {
      if(!this.story.comments.length) {
        this.isLastComment = false;
        this.isLikeComment = false;
        return
      }
      let idx1 = this.story.comments[this.story.comments.length-1].likedBy.findIndex(
        (user) => user._id === this.userId
      );
      this.isLastComment = idx1 === -1 ? false : true;
      let idx2 = this.story.comments[this.story.comments.length-2].likedBy.findIndex(
        (user) => user._id === this.userId
      );
      this.isLikeComment = idx2 === -1 ? false : true;
    },
    onPost(storyId) {
      if(this.txt==='')return
      this.$emit("onPost", storyId, this.txt);
      this.userCommentLike();
      this.txt = "";
    },
    onEmojiPicker() {
      this.isEmojiPickerOpen = !this.isEmojiPickerOpen;
    },
    selectEmoji(emoji) {
      console.log(emoji);
      this.txt = this.txt + emoji.data;
    },
    onMark() {
      this.isMarked = !this.isMarked;
    },
  },
  created() {
    this.userLike();
    this.userCommentLike();
  },
  computed: {
    VEmojiPicker,
  },
};
</script>
