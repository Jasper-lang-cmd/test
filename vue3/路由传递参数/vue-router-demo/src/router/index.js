import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/news",
    name: "news",
    // 这是异步加载方式
    component: () => import("../views/NewsView.vue"),
  },
  {
    // 第一步：在路由配置中指定参数的 key(传递参数)
    path: "/newsdetails/:name",
    name: "newsdetails",
    component: () => import("../views/NewsDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
