<template>
  <h3>Component02</h3>
  <p>{{ title }}</p>
  <p>{{ onEvent("keli") }}</p>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    // 通过函数实现 props 的子传父（默认是父传子）
    onEvent: Function,
  },
};
</script>
