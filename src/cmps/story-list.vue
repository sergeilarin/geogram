<template>
  <section class="list-container">
    <p v-if="!storys">No storys to show :(</p>
    <ul v-for="story in storys" :key="story._id" v-else class="story-list">
      <story-preview :story="story" />
    </ul>
  </section>
</template>

<script>
import storyPreview from "./story-preview.vue";

export default {
  props: { storys: Array },

  methods: {},
  components: {
    storyPreview,
  },
};
</script>
