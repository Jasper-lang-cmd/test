import { defineStore } from "pinia";
import { ref } from "vue";

// Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。
// 换句话说，它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。
// 它有三个概念，state、getter 和 action，我们可以假设这些概念相当于组件中的 data、 computed 和 methods。

function initState() {
  return {
    isCollapse: false,
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
  return {
    state,
  };
});
