<template>
  <section class="container home text-center">
    <h1>Home Page</h1>
    <story-list :storys="storys"/>
    
  </section>

  
</template>

<script>
import storyList from "../cmps/story-list.vue"
import { storyService } from '../services/story.service.js'


export default {
  name: 'home',
  data() {
    return {
      storys:[]
    }
  },
  computed: {
  },
  created() {
     this.loadStorys()
  },
  methods: {
    loadStorys() {
            storyService.query()
                .then(storys => {this.storys = storys; console.log(storys)})
        },
  },
  components: {
    storyList
  },
  
}
</script>
