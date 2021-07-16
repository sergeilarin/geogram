<template>
  <header>
    <router-link to="/">
      <span class="logo">Geogram</span>
    </router-link>
    <story-filter @filter="setFilter" />
    <nav>
      <router-link to="/"><img src="../assets/img/home-fill.png" alt=""></router-link>
      <router-link to="/review">Reviews</router-link>
      <router-link to="/chat"><img src="../assets/img/send.png" alt=""></router-link>
      <router-link to="/login">Login / Signup</router-link>
    </nav>
    <section class="loggedin-user" v-if="loggedInUser">
      <router-link :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </router-link>
      <span>{{ loggedInUser.score }}</span>
    </section>
  </header>
</template>


<script>
import storyFilter from "./story-filter.vue";

export default {
  methods:{
    setFilter(filterBy) {
            console.log('hi',filterBy);
          
        },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: {
    storyFilter,
  },
};
</script>