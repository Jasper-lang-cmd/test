<template>
  <h3>组件生命周期应用</h3>
  <p ref="name">可莉</p>
  <ul>
    <li v-for="(item, index) of banner" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      banner: [],
    };
  },
  created() {
    // 模拟网络请求
    this.banner = [
      {
        title: "1111",
        content: "唱歌",
      },
      {
        title: "2222",
        content: "跳舞",
      },
      {
        title: "3333",
        content: "打篮球",
      },
      {
        title: "4444",
        content: "Rap",
      },
    ];
  },
  beforeMount() {
    console.log(this.$refs.name); //undefined（不可获取DOM）
  },
  mounted() {
    console.log(this.$refs.name); //组件渲染之后，可以获取 DOM
  },
};
</script>
