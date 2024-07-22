<template>
  <h3>Main</h3>
  <p>搜索内容为 : {{ search }}</p>
  <SearchCompontent @searchEvent="getSearch" />
</template>
<script>
import SearchCompontent from "./SearchCompontent.vue";
export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    SearchCompontent,
  },
  methods: {
    getSearch(data) {
      this.search = data;
    },
  },
};
</script>
