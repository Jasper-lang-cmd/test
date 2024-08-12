import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 这个 resolve 是添加的别名。
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
  // 解决跨域
  // server: {
  //   proxy: {
  //     "^api": {
  //       target: "http://localhost:3000", //目标源，目标服务器，真实请求地址。
  //       changeOrigin: true, //支持跨域
  //       // rewrite: (path) => path.replace(/^\api/,""), //重写真实路径,替换/api
  //     },
  //   },
  // },
});
