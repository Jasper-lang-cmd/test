<template>
  <h3>Chlid01</h3>
  <p>{{ message }}</p>
  <p>{{ fullMessage }}</p>
  <p>{{ globalData }}</p>
</template>
<script>
export default {
  inject: ["message", "globalData"],
  //   注入会在组件自身的状态之前被解析，因此可以在 data（）中访问到注入的属性。
  data() {
    return {
      fullMessage: this.message,
    };
  },
};
</script>
