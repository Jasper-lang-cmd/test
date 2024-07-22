<template>
  <!-- 必须是唯一根元素（不然不会生效） -->
  <!-- h3标签现有一个类名为 : attr-container -->
  <h3>透传属性</h3>
</template>
<script>
export default {
  // 禁止 Attribute 继承
  //   inheritAttrs: false,
};
</script>
<style>
.attr-container {
  color: yellowgreen;
  font-size: 30px;
}
</style>
