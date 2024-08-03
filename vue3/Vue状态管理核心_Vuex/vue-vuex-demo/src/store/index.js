import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    counter: 10,
  },
  // getters : 对Vuex中的数据进行过滤
  getters: {
    getCounter(state) {
      return state.counter > 0 ? state.counter : "counter <= 0";
    },
  },
  // mutations : 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  // Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和
  // 一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。
  mutations: {
    updataCounter(state, num) {
      // state.counter++;
      state.counter += num;
    },
  },
  // actions : Action 类似于 mutation，不同在于 :
  // Action 提交的是 mutation，而不是直接变更状态
  // Action 可以包含任意异步操作(重点 : 异步操作)
  actions: {
    // { commit } : 对象解构赋值
    asyncAddCounter({ commit }) {
      axios.get("http://iwenwiki.com/api/generator/list.php").then((res) => {
        commit("updataCounter", res.data[1]);
      });
    },
  },
  modules: {},
});
