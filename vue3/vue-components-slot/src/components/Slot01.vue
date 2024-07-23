<template>
  <h3>Slot续集</h3>
  <!-- 具名插槽 -->
  <slot name="header">插槽默认值</slot>
  <hr />
  <slot name="main">插槽默认值</slot>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
