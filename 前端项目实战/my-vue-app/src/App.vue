<script setup></script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  /* 当设置了 overflow: hidden; 时，任何超出元素盒子（box）边界的内容都会被裁剪掉，用户将无法在视觉上看到这些溢出的内容 */
  overflow: hidden;
}
</style>
