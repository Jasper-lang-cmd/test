import { createApp } from "vue";
import App from "./App.vue";

// app : Vue 的实例对象。
// 在一个 Vue 项目中，有且只有一个 Vue 实例对象。
// App 就是 根组件
const app = createApp(App);
app.provide("globalData", "全局数据");
// 挂载应用
app.mount("#app");
