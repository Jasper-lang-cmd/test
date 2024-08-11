import { defineStore } from "pinia";
import { ref, watch } from "vue";

// Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。
// 换句话说，它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。
// 它有三个概念，state、getter 和 action，我们可以假设这些概念相当于组件中的 data、 computed 和 methods。

function initState() {
  return {
    isCollapse: false,
    tags: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    currentMenu: null,
    menuList: [],
    token: "",
    routerList: [],
  };
}

export const useAllDataStore = defineStore("AllData", () => {
  // ref        ->   state属性
  // computed   ->   getters属性
  // function   ->   actions属性
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  // 在defineStore(,function内部写),更方便
  const state = ref(initState());

  // 使用 watch 监听
  watch(
    state,
    (newObj) => {
      if (!newObj.token) return;
      localStorage.setItem("store", JSON.stringify(newObj));
    },
    { deep: true }
  );

  function selectMenu(val) {
    if (val.name === "home") {
      state.value.currentMenu = null;
    } else {
      let index = state.value.tags.findIndex((item) => item.name === val.name);
      index === -1 ? state.value.tags.push(val) : "";
    }
  }
  function updateTags(tag) {
    let index = state.value.tags.findIndex((item) => item.name === tag.name);
    // 一旦找到索引（假设是有效的索引，即不是 -1），就使用 splice 方法来从数组中移除该元素,
    // splice 方法的第一个参数是开始删除的位置（这里是 index），第二个参数是要删除的元素的数量（这里是 1，因为我们只想删除一个元素）。
    state.value.tags.splice(index, 1);
  }
  function updateMenuList(val) {
    state.value.menuList = val;
  }
  function addMenu(router, type) {
    if (type === "refresh") {
      if (JSON.parse(localStorage.getItem("store"))) {
        state.value = JSON.parse(localStorage.getItem("store"));

        state.value.routerList = [];
      } else {
        return;
      }
    }
    const menu = state.value.menuList;
    // Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：
    // 指定的 glob 模式 ../views/**/*.vue 动态地导入所有位于 views 文件夹（及其子文件夹）中的 .vue 文件。这里的 ** 是一个通配符，表示任意数量的目录（包括零个），
    // 而 * 表示任意数量的任意字符（但通常用于匹配文件名中的字符）。因此，这个模式会匹配 views 目录及其所有子目录中所有以 .vue 结尾的文件。
    const module = import.meta.glob("../views/**/*.vue");
    const routeArr = [];
    menu.forEach((item) => {
      if (item.children) {
        item.children.forEach((val) => {
          let url = `../views/${val.url}.vue`;
          val.component = module[url];
          routeArr.push(...item.children);
        });
      } else {
        let url = `../views/${item.url}.vue`;
        item.component = module[url];
        routeArr.push(item);
      }
    });
    // console.log(router.getRoutes());
    // 解决多账号路由问题
    let routes = router.getRoutes();
    routes.forEach((item) => {
      if (item.name == "main" || item.name == "login") {
        return;
      } else {
        router.removeRoute(item.name);
      }
    });
    routeArr.forEach((item) => {
      state.value.routerList.push(router.addRoute("main", item));
    });
  }
  return {
    state,
    selectMenu,
    updateTags,
    updateMenuList,
    addMenu,
  };
});
