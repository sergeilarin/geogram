<template>
  <section class="user-story-list-container">
      <img v-if="story" :src="story.imgUrl" alt="" >
    
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
   
  },
};
</script>