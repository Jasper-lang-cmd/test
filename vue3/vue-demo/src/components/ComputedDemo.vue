<!-- 计算属性 -->
<template>
  <h3>{{ itbaizhan.name }}</h3>
  <p>{{ itbaizhanContent }}</p>
  <p>{{ itbaizhanContent02() }}</p>
</template>
<script>
export default {
  data() {
    return {
      itbaizhan: {
        name: "百战程序员",
        content: ["前端", "Java", "python"],
      },
    };
  },
  //   计算属性(调用多次，其计算的值，仅计算了一次) :关键字 --> computed
  computed: {
    itbaizhanContent() {
      return this.itbaizhan.content.length > 0 ? "Yes" : "No";
    },
  },
  //   放函数或方法（调用一次，计算一次(调用多次，计算多次)）
  methods: {
    itbaizhanContent02() {
      return this.itbaizhan.content.length > 0 ? "Yes" : "No";
    },
  },
};
</script>
