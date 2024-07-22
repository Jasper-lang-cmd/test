<template>
  <h3>Chlid</h3>
  <button @click="clickEventHandle">传递数据</button>
</template>
<script>
export default {
  data() {
    return {
      msg: "Chlid数据",
    };
  },
  methods: {
    clickEventHandle() {
      // 自定义事件(通过子级元素触发父级事件)
      this.$emit("someEvent", this.msg);
    },
  },
};
</script>
