<template>
  <section >
    <form @submit.prevent="filter">
      <input class="toy-filter"  @input="filter" v-model="filterBy.txt" placeholder="Search" type="text" />
    </form>
  </section>
</template>

<script>
export default {
  name: "toy-filter",
  created() {},
  data() {
    return {
      filterBy: {
        txt: '',
      },
    };
  },
  computed: {},
  methods: {
    filter() {
		console.log('toyFilter',this.filterBy);
      this.$emit("filter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>
