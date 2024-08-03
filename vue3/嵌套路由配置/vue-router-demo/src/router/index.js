import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // // 第一步：创建子路由要加载显示的页面
    path: "/about",
    name: "about",
    // 第五步：重定向配置 redirect:"/news/baidu"
    redirect: "/about/us",
    component: () => import("../views/AboutView.vue"),
    children: [
      {
        // 二级导航的路径不要加斜杠
        // 第二步：在路由配置文件中添加子路由配置
        path: "us",
        component: () => import("../views/AboutSub/AboutUS.vue"),
      },
      {
        path: "info",
        component: () => import("../views/AboutSub/AboutInfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
