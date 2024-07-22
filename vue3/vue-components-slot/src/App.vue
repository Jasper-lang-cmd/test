<template>
  <SlotBase>
    <div>
      <h3>插槽标题</h3>
      <p>插槽内容</p>
    </div>
  </SlotBase>
</template>
<script>
import SlotBase from "./components/SlotsBase.vue";
export default {
  components: {
    SlotBase,
  },
};
</script>
<style></style>
