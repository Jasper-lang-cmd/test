<template>
  <!-- <UserComponent /> -->

  <!-- 动态组件: 切换组件 -->
  <!-- 通过  <keep-alive>  组件强制被切换掉的组件仍然保持 “ 存活 ”  的状态。-->
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>
  <button @click="changeHandle">切换组件</button>
</template>
<script>
import { defineAsyncComponent } from "vue";
import UserComponent from "./components/UserComponent.vue";
import DynamicComponentA from "./components/DynamicComponentA.vue";
// import DynamicComponentB from "./components/DynamicComponentB.vue";
// 异步加载组件
const DynamicComponentB = defineAsyncComponent(() =>
  import("./components/DynamicComponentB.vue")
);
export default {
  data() {
    return {
      tabComponent: "DynamicComponentA",
    };
  },
  components: {
    UserComponent,
    DynamicComponentA,
    DynamicComponentB,
  },
  methods: {
    changeHandle() {
      this.tabComponent =
        this.tabComponent == "DynamicComponentA"
          ? "DynamicComponentB"
          : "DynamicComponentA";
    },
  },
};
</script>
