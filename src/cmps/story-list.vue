<template>
  <section class="list-container">
    <p v-if="!stories">No stories to show :(</p>
    <ul v-for="story in stories" :key="story._id" v-else class="story-list">
      <story-preview :story="story" />
    </ul>
  </section>
</template>

<script>
import storyPreview from "./story-preview.vue";

export default {
  props: { stories: Array },

  methods: {},
  components: {
    storyPreview,
  },
};
</script>
