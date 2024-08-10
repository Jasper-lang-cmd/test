<template>
  <!-- :collapse-transition="false"这样的语法通常用于动态地控制组件或元素的过渡效果（transition）是否启用。 -->
  <el-aside :width="width">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      :collapse-transition="false"
      :default-active="activeMenu"
    >
      <!-- v-show 指令根据其后表达式的真假值来决定是否渲染元素，但不移除DOM元素，只是简单地切换元素的CSS属性display。 -->
      <h3 v-show="!isCollapse">通用后台管理系统</h3>
      <h3 v-show="isCollapse">后台</h3>
      <el-menu-item
        v-for="item in noChildren"
        :index="item.path"
        :key="item.path"
        @click="handleMenu(item)"
      >
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu
        v-for="item in hasChildren"
        :index="item.path"
        :key="item.path"
      >
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(subItem, subIndex) in item.children"
            :index="subItem.path"
            :key="subItem.path"
            @click="handleMenu(subItem)"
          >
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { ref, computed } from "vue";
import { useAllDataStore } from "@/stores";
import { useRoute, useRouter } from "vue-router";
// 这个list数组可以用于构建动态的侧边栏菜单或者导航菜单。
// 每个菜单项都有一些基本的属性，如path（路由路径）、name（名称，可能用于Vue Router的命名路由）、
// label（显示名称）、icon（图标名称，可能用于显示图标）和url（可能用于链接到特定的Vue组件或页面）。
const list = ref([
  {
    path: "/home",
    name: "home",
    label: "首页",
    icon: "house",
    url: "Home",
  },
  {
    path: "/mall",
    name: "mall",
    label: "商品管理",
    icon: "video-play",
    url: "Mall",
  },
  {
    path: "/user",
    name: "user",
    label: "用户管理",
    icon: "user",
    url: "User",
  },
  {
    path: "other",
    label: "其他",
    icon: "location",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "页面1",
        icon: "setting",
        url: "Page1",
      },
      {
        path: "/page2",
        name: "page2",
        label: "页面2",
        icon: "setting",
        url: "Page2",
      },
    ],
  },
]);

// computed属性noChildren和hasChildren分别用于筛选出没有子菜单项和有子菜单项的菜单项。

// 在noChildren的filter函数中，可使用 !item.children || item.children.length === 0 条件,
// 来确保即使children属性存在但为空数组时，该菜单项也被视为没有子菜单项。
// 同样，在hasChildren中，可使用 item.children && item.children.length > 0 条件，
// 来确保只有当children属性存在且非空时，该菜单项才被视为有子菜单项。
const noChildren = computed(() => list.value.filter((item) => !item.children));
const hasChildren = computed(() => list.value.filter((item) => item.children));

const store = useAllDataStore();
const isCollapse = computed(() => store.state.isCollapse);

// 定义width
const width = computed(() => (store.state.isCollapse ? "64px" : "180px"));
// useRouter 函数返回的是路由的实例对象，通过这个对象，你可以编程式地导航到不同的 URL，
// 例如使用 router.push 或 router.replace 方法。
// 这与 useRoute 不同，后者返回的是当前路由的信息对象，包含如路径、查询参数、哈希值等，但它不提供修改路由状态的方法。
const router = useRouter();
const route = useRoute();
const activeMenu = computed(() => route.path);
const handleMenu = (item) => {
  router.push(item.path);
  store.selectMenu(item);
};
</script>
<style scoped lang="less">
.icons {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.el-menu {
  border-right: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
.el-aside {
  height: 100%;
  background-color: #545c64;
}
</style>
