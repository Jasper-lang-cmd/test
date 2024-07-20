<!-- HTML模板 -->
<template>
  <!-- 第三步 : 显示组件 -->
  <Mycomponent />
</template>

<!-- 逻辑部分 -->
<script>
// 第一步 --> 引入组件
import Mycomponent from "./components/Mycomponent.vue";

export default {
  // 第二步 --> 注入组件
  components: {
    Mycomponent,
  },
};
</script>
<!-- 样式 -->
<style></style>
