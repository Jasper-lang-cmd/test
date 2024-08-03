<template>
  <!-- 路由的显示入口 -->
  <!--
       Vue 3中的路由通过Vue Router实现，它对于构建单页应用至关重要。
       路由不仅实现了页面之间的无刷新切换，还支持嵌套路由、提供导航守卫、
       支持动态路由和参数传递等功能，同时利用浏览器的前进与后退功能增强了用户体验。
   -->
  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
  </nav>
  <router-view />
</template>

<script></script>

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
