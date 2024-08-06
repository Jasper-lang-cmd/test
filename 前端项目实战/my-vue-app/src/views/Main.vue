<script setup>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 自定义左侧的组件 -->
      <CommonAside />
      <!-- 右侧 -->
      <el-container>
        <el-header class="el-header">
          <CommonHeader />
        </el-header>
        <el-main class="right-main"> main </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<!-- 
    lang="less" 属性：告诉Vue.js（或Webpack等构建工具）这个<style>标签内的内容是LESS代码，
    需要被LESS编译器处理后再转换成CSS。 
-->
<style scoped lang="less">
.common-layout,
.lay-container {
  height: 100%;
}

.el-header {
  background-color: #333;
}
</style>
