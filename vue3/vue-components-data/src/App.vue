<template>
  <h3>祖先</h3>
  <Parent01 />
</template>
<script>
import Parent01 from "./components/Parent01.vue";
export default {
  // 使用函数的形式，可以访问到 ‘this’
  provide() {
    return {
      message: this.message,
    };
  },
  // provide: {
  //   message: "祖先的遗产",
  // },
  data() {
    return {
      message: "祖先的遗产",
    };
  },
  components: {
    Parent01,
  },
};
</script>
<style></style>
