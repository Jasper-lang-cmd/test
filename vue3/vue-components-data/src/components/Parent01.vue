<template>
  <h3>Parent01</h3>
  <p>{{ globalData }}</p>
  <!-- v-bind(简写为 : )指令用于动态地绑定一个或多个特性，或一个组件prop到表达式。 -->
  <!-- <Chlid01 :title="title" /> -->
  <Chlid01 />
</template>
<script>
import Chlid01 from "./Chlid01.vue";
export default {
  inject: ["globalData"],
  data() {
    return {};
  },
  components: {
    Chlid01,
  },
};
</script>
