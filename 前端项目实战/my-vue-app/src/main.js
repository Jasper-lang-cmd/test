import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/less/index.less";
import router from "./router";
// 完整引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 从 @element-plus/icons-vue 中导入所有图标并进行全局注册
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 引入 pinia : Pinia是专为Vue应用程序开发的状态管理库，它支持Vue 2和Vue 3，并允许跨组件或页面共享状态。
// Pinia作为Vuex的一种轻量级替代方案，旨在提供一个更加简单、直观且类型安全的方式来管理Vue.js应用的状态。
import { createPinia } from "pinia";
// 引入 mock.js
import "@/api/mock.js";

import api from "@/api/api";

import { useAllDataStore } from "@/stores";
// 路由守卫
function isRoute(to) {
  let res = router.getRoutes();
  let resFil = res.filter((item) => item.path === to.path);
  return resFil.length > 0;
}
router.beforeEach((to, from) => {
  if (to.path !== "/login" && !store.state.token) {
    return { name: "login" };
  }
  if (!isRoute(to)) {
    return { name: "404" };
  }
});
const pinia = createPinia();

const app = createApp(App);
app.use(ElementPlus);
app.use(pinia);
// 放到 app.use(pinia) 之后
const store = useAllDataStore();
store.addMenu(router, "refresh");

app.use(router);
app.mount("#app");
app.config.globalProperties.$api = api;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
