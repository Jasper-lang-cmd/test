<template>
  <!-- 
          Vue 3中的路由通过Vue Router实现，它对于构建单页应用至关重要。
          路由不仅实现了页面之间的无刷新切换，还支持嵌套路由、提供导航守卫、
          支持动态路由和参数传递等功能，同时利用浏览器的前进与后退功能增强了用户体验。 
  -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
