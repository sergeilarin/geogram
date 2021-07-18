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
      <button class="story-header-btn">
        <img src="../assets/img/dots.png" alt="" />
      </button>
    </div>
    <img :src="story.imgUrl" alt="story img" class="story-img" />
    <div class="story-content">
      <div class="story-action">
        <button v-if="!isLike" @click="onLike">
          <img src="../assets/img/heart.png" />
        </button>
        <button v-else @click="onLike">
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
      <button class="comments">
        View all {{ story.comments.length }} comments
      </button>
      <div>
        <div class="story-txt">
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
          <button><img src="../assets/img/heart.png" alt="" /></button>
        </div>
        <div class="story-txt">
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
          <button><img src="../assets/img/heart.png" alt="" /></button>
        </div>
        <div class="story-published-time">
          <span>{{ story.createdAt | moment("from", "now") }}</span>
        </div>
      </div>
    </div>
    <form class="story-comment">
      <textarea placeholder="Add a comment..." class="comment-input"></textarea>
      <button type="submit" class="story-comment-btn">Post</button>
    </form>
  </article>
</template>

<script>
export default {
  props: { story: Object },
  data() {
    return {
      isLike: false,
      isMarked: false,
    };
  },
  methods: {
    onLike() {
      this.isLike = !this.isLike;
    },
    onMark() {
      this.isMarked = !this.isMarked;
    },
  },
  computed: {},
};
</script>
