<template>
  <h3>Parent</h3>
  <!-- 静态传递数据 -->
  <Chlid title="Parent数据" />
  <!-- 动态传递数据 -->
  <Chlid :title="message" :age="age" :names="names" :userInfo="userInfo" />
</template>
<script>
import Chlid from "./Chlid.vue";
export default {
  data() {
    return {
      // 字符串类型传递
      message: "Parent数据1",
      //   数字类型传递
      age: 20,
      //   数组类型传递
      names: ["keli", "qiqi", "diaona"],
      //   对象类型传递
      userInfo: {
        name: "op",
        age: 18,
      },
    };
  },
  components: {
    Chlid,
  },
};
</script>
