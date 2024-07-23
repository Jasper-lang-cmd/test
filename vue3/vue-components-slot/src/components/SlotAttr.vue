<template>
  <h3>Slot再续集</h3>
  <!-- ChlidMessage传递给父组件 -->
  <slot name="header" :msg="ChlidMessage"></slot>
  <slot name="main" :jop="jopMessage"></slot>
</template>
<script>
export default {
  data() {
    return {
      ChlidMessage: "子组件数据",
      jopMessage: "op",
    };
  },
};
</script>
