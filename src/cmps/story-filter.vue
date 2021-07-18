<template>
  <section >
    <form @submit.prevent="filter">
      <input class="filter"  placeholder="Search" type="search" />
    </form>
  </section>
</template>

<script>
export default {
  name: "",
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
