<template>
  <section class="user-story-list-container">
    <p v-if="!user.savedStoryIds.length">No stories to show :(</p>
    <ul v-for="storyId in user.savedStoryIds" :key="storyId" v-else class="user-story-list">
      <user-story-preview :storyId="storyId" />
    </ul>
  </section>
</template>
<script>
import userStoryPreview from "./user-story-preview.vue";

export default {
  props: { user: Object },

  methods: {},
  components: {
    userStoryPreview,
  },
};
</script>