<template>
  <div class="about">
    <!-- 第四步：添加子路由跳转链接 -->
    <router-link to="/about/us">关于我们</router-link> |
    <router-link to="/about/info">关于信息</router-link>

    <!-- 第三步：指定子路由显示位置 <router-view></router-view> -->
    <router-view></router-view>
  </div>
</template>
