import { defineStore } from "pinia";
import { ref } from "vue";

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
  return {
    state,
    selectMenu,
    updateTags,
  };
});
