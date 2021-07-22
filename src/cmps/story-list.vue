<template>
  <section class="list-container">
    <p v-if="!stories">No stories to show :(</p>
    <ul v-for="story in stories" :key="story._id" v-else class="story-list">
      <story-preview
       :story="story" 
       :userId="userId"
       @onPost="postComment"   
       @removeStory="removeStory" 
       @AddLike="AddLike" 
       @removeLike="removeLike"
       @AddCommentLike="AddCommentLike"
       @removeCommentLike="removeCommentLike"/>
    </ul>
  </section>
</template>

<script>
import storyPreview from "./story-preview.vue";

export default {
  props: { stories: Array,
             userId:String },

  methods: {
    removeStory(storyId) {
      this.$emit('removeStory', storyId);
    },
    AddLike(storyId) {
      this.$emit('AddLike', storyId);
    },
    removeLike(storyId) {
      this.$emit('removeLike', storyId);
    },
    AddCommentLike(storyId,commentId){
       this.$emit('AddCommentLike', storyId,commentId);
    },
    removeCommentLike(storyId,commentId){
      console.log('list');
       this.$emit('removeCommentLike', storyId,commentId);
    },
    postComment(storyId,txt){
     this.$emit('postComment', storyId,txt);
    }
  },
  components: {
    storyPreview,
  },
};
</script>
