<template>
  <div class="header">
    <div class="left-content">
      <el-button size="small" @click="handleCollapse">
        <component class="icons" is="menu"></component>
      </el-button>
      <!-- 编程面包屑（Breadcrumb）是一个导航辅助功能，用于显示用户当前所在页面在网站或应用程序结构中的位置路径。 -->
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current" :to="current.path">{{
          current.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="getImageUrl('user')" class="user" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useAllDataStore } from "@/stores";
import { useRouter } from "vue-router";
// URL() : 构造函数返回一个新创建的 URL 对象，该对象表示由参数定义的 URL。
// new URL(url)  或者  new URL(url, base)

const getImageUrl = (user) => {
  return new URL(`../assets/images/${3}.jpg`, import.meta.url).href;
};

const store = useAllDataStore();

// 定义 handleCollapse 方法
const handleCollapse = () => {
  // 点击时取反，即折叠（isCollapse : true）
  store.state.isCollapse = !store.state.isCollapse;
};
// 定义 “Logout” -> 退出 方法(用户登出时执行)
const router = useRouter();
const handleLogout = () => {
  store.clean();
  router.push("/login");
};

const current = computed(() => store.state.currentMenu);
</script>
<style lang="less" scoped>
.header {
  display: flex;
  //   这个属性用于在主轴（默认是水平方向）上对齐Flex容器中的项目。
  //   space-between 的值表示项目之间的间隔相等，且第一个项目将与容器的起始边缘对齐，
  //   而最后一个项目将与容器的结束边缘对齐，剩余的空间在项目之间平均分配。
  justify-content: space-between;
  //   这个属性用于在交叉轴（如果主轴是水平方向，则交叉轴是垂直方向）上对齐Flex容器中的项目。
  //   center 的值表示项目在交叉轴上居中对齐。
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
}

.icons {
  width: 20px;
  height: 20px;
}

.left-content {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }
}

.right-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
:deep(.bread span) {
  color: #fff !important;
  cursor: pointer !important;
}
</style>
