<template>
  <h3>Component01</h3>
  <p>父元素 : {{ message }}</p>
  <!-- 传递函数 -->
  <Component02 title="标题" :onEvent="dataFn" />
</template>
<script>
import Component02 from "./Component02.vue";
export default {
  data() {
    return {
      message: "",
    };
  },
  components: {
    Component02,
  },
  methods: {
    dataFn(data) {
      console.log(data);
      this.message = data;
    },
  },
};
</script>
