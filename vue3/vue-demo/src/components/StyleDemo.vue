<!-- style 绑定 -->
<template>
  <!-- 绑定对象 -->
  <p :style="{ color: activiteColor, fontSize: fontsize + 'px' }">
    Style 绑定1
  </p>
  <p :style="styleObject">Style 绑定2</p>
  <!-- 绑定数组(了解就行) -->
  <p :style="[styleObject]">Style 绑定3</p>
</template>
<script>
export default {
  data() {
    return {
      activiteColor: "green",
      fontsize: 30,
      styleObject: {
        color: "red",
        fontSize: "30px",
      },
    };
  },
};
</script>
