import { createRouter, createWebHashHistory } from "vue-router";
// 引入页面(@符号是一个别名（alias），它通常被配置为指向项目的src目录。)
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";

// 创建路由
// 配置信息中需要页面的相关配置
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 导出
export default router;
