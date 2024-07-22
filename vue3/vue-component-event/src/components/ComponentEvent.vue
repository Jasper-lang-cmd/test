<template>
  <h3>组件事件</h3>
  <!-- 父组件监听子组件的someEvent自定义事件,并接收子组件传递过来的数据 -->
  <Chlid @someEvent="getHandle" />
  <p>父元素 : {{ message }}</p>
</template>
<script>
import Chlid from "./Chlid.vue";
export default {
  data() {
    return {
      message: "",
    };
  },

  components: {
    Chlid,
  },
  methods: {
    getHandle(data) {
      console.log("触发了", data);
      this.message = data;
    },
  },
};
</script>
