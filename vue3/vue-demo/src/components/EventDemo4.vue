<template>
  <h3>事件传参</h3>
  <!-- $event : 传递参数过程中获取event -->
  <p
    @click="GetNameHandle(name, $event)"
    v-for="(name, index) in names"
    :key="index"
  >
    {{ name }}
  </p>
</template>
<script>
export default {
  data() {
    return {
      names: ["keli", "qiqi", "diaona"],
    };
  },
  methods: {
    GetNameHandle(name, e) {
      // 点击名字，控制台获取名字(获取列表的内容)
      console.log(name);
      console.log(e);
    },
  },
};
</script>
