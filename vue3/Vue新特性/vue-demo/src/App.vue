<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="数据" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// 引入provide
import { provide } from "vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    provide("message", "我是传递的值");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
