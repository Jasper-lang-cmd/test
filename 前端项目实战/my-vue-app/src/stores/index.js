import { defineStore } from "pinia";
import { ref } from "vue";
export const useAllDataStore = defineStore("AllData", () => {
  // ref        ->   state属性
  // computed   ->   getters属性
  // function   ->   actions属性
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

// function initState() {}

// // 在defineStore(,function内部写)
// const state = ref(initState());
// return {state,};
