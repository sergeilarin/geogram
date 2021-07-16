<template>
  <section class="container ">
    <story-list :stories="stories" />
  </section>
</template>

<script>
import storyList from "../cmps/story-list.vue";
import { storyService } from "../services/story.service.js";

export default {
  name: "home",
  data() {
    return {
      stories: [],
    };
  },
  computed: {},
  created() {
    this.loadStories();
  },
  methods: {
    loadStories() {
      storyService.query().then((stories) => {
        this.stories = stories;
        console.log(stories);
      });
    },
  },
  components: {
    storyList,
  },
};
</script>
