<template>
  <!-- <SlotBase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </SlotBase> -->

  <!-- 插槽内容在父组件中定义 -->
  <!-- v-slot 对应简写 # -->
  <!-- <Slot01>
    <template #header>
      <h3>{{ message }}</h3>
    </template>
    <template v-slot:main>
      <p>内容</p>
    </template>
  </Slot01> -->

  <!-- 用 v-slot 接收来自子组件的 ChlidMessage -->
  <SlotAttr>
    <template #header="slotProps">
      <h3>{{ currentTest }}-{{ slotProps.msg }}</h3>
    </template>
    <template #main="slotProps">
      <p>{{ slotProps.jop }}</p>
    </template>
  </SlotAttr>
</template>
<script>
import SlotBase from "./components/SlotsBase.vue";
import Slot01 from "./components/Slot01.vue";
import SlotAttr from "./components/SlotAttr.vue";
export default {
  data() {
    return {
      message: "插槽内容续集",
      currentTest: "测试内容",
    };
  },
  components: {
    SlotBase,
    Slot01,
    SlotAttr,
  },
};
</script>
<style></style>
