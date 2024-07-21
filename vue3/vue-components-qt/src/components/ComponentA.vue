<template>
  <h3>ComponentA</h3>

  <!-- 传递给ComponentB组件数据 -->
  <ComponentB :title="title" :age="age" :names="names" />
</template>
<script>
import ComponentB from "./ComponentB.vue";
export default {
  data() {
    return {
      title: "测试标题",
      age: 20,
      names: ["zaoyou", "qiliangliang", "naxida"],
    };
  },
  components: {
    ComponentB,
  },
};
</script>
