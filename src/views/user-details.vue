<template>
  <section class="user-details">
    <div class="details">
      <div class="details-img">
        <img :src="this.user.imgUrl" alt="" srcset="" />
      </div>
      <div class="details-description">
        <div class="details-description-username">{{this.user.username}}</div>
        <div class="user-details-counter">
          <div class="details-counter">
            <span class="details-counter-num">{{this.user.savedStoryIds.length}}</span>
            posts
          </div>
          <button class="details-counter">
            <span class="details-counter-num">{{this.user.followers.length}}</span>
            followers
          </button>
          <button class="details-counter">
            <span class="details-counter-num">{{this.user.following.length}}</span>
            following
          </button>
        </div>
        <div class="user-bio">
          <span class="user-bio-fullname"> {{this.user.fullname}} </span>
          <p class="bio">full power</p>
        </div>
      </div>
    </div>
    <div class="stories-tabs">
      <button>
        <img src="../assets/img/box.png" alt="" />
        POSTS
      </button>
    </div>
    <user-story-list :user="user" />
  </section>
</template>

<script>
import userStoryList from "../cmps/user-profile/user-story-list.vue";
// import { userService } from "../services/user.service";

export default {
  data() {
    return {
      user: {
        _id: "u70",
        username: "stewie",
        password: "masha18",
        fullname: "stewie griffin",
        imgUrl: "https://spng.subpng.com/20190228/es/kisspng-stewie-griffin-peter-griffin-lois-griffin-brian-gr-homer-duff-pocket-t-shirt-rarestapparel-5c7791349314d2.5454867415513398286025.jpg",
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
        savedStoryIds: ["s70","s71","s72"],
      },
    };
  },
  // async created() {
  //   const user = await userService.getById(id);
  //   this.user = user;
  // },
  watch: {},
  computed: {},
  components: {
    userStoryList,
  },
};
</script>