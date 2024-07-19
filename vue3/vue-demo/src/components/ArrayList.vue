<template>
  <h3>数组变化侦听</h3>
  <button @click="addListHandle">添加数据</button>
  <ul>
    <li v-for="(name, index) of names" :key="index">{{ name }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      names: ["梦魇", "饮血", "狂飙"],
    };
  },
  methods: {
    addListHandle() {
      //   引起UI自动更新
      //   this.names.push("樱花");

      //   不会引起UI自动更新
      this.names.concat(["樱花"]);
      console.log(this.names.concat(["樱花"]));
      //   this.names = this.names.concat(["樱花"]);(会发生变化，把数据重新赋给原数组，原数组发生变化)
    },
  },
};
</script>
