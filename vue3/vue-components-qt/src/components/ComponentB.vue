<template>
  <h3>ComponentB</h3>
  <p>{{ title }}</p>
  <p>{{ age }}</p>
  <p v-for="(name, index) of names" :key="index">{{ name }}</p>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    // 校验传递数据的类型
    title: {
      type: [String, Number, Array, Object],
      //   设置必选项（没传递数据时，控制台会提示 Missing requried prop:）
      required: true,
    },
    // 设默认值（没传数据时,显示默认值）
    age: {
      type: Number,
      default: 0,
    },
    // 数字和字符串可以直接 default ，但是如果是数组和对象，则必须通过工厂函数返回默认值。
    names: {
      type: Array,
      default() {
        return ["空"];
      },
    },
  },
};
</script>
