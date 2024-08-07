import { createRouter, createWebHashHistory } from "vue-router";

// 指定路由规则
const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/Main.vue"),
    // 重定位
    redirect: "/home",
    // 子路由
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  // 设置路由模式
  history: createWebHashHistory(),
  routes,
});

export default router;
