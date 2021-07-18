<template>
  <section class="user-story-list-container">
      <h2>{{storyId}}</h2>
      <img src="" alt="" >
    <!-- <p v-if="!stories">No stories to show :(</p>
    <ul v-for="story in stories" :key="story._id" v-else class="user-story-list">
      <user-story-preview :story="story" />
    </ul> -->
  </section>
</template>
<script>
import { storyService } from '../../services/story.service';

export default {
  props: { storyId:String },
  data() {
    return {
      story:null,
    };
  },
computed: {
    
},
  created() {
      this.loadStory();
  },
  methods: {
      loadStory() {
      storyService.getById(this.storyId).then((story) => {
        this.story= story;
        console.log(this.story);
      });
    },
  },
  computed:{

  },
  components: {
    storyService,
  },
};
</script>