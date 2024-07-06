<!-- Vue使用一种基于HTML的模板语法，
      让我们能够声明式地将其组件实例地数据绑定到呈现的DOM上。
      所有的Vue模板都是语法层面合法的HTML，可以被符合规范的浏览器和HTML解析器解析。
-->

<!-- 最基本的数据绑定形式 : 文本插值  -->
<!-- 它使用的是“Mustache”语法 : 即双大括号 -->

<!-- 使用JavaScript表达式 -->
<!-- 每个绑定仅支持 单一表达式 ，也就是一段能够被求值的JavaScript代码 -->
<!-- 一个简单的判断方法是是否可以合法地写在 return 后面 -->

<!-- 原始HTML : 
          双大括号将会将数据插值为纯文本，而不是HTML。 
          若想插入HTML，需要使用 v-html 指令。
 -->
<script>
export default {
  data() {
    return {
      msg: "op",
      number: 10,
      ok: true,
      message: "大家好",
      rawHTML: "<a href='https://itbaizhan.com'>百战程序猿</a>",
    };
  },
};
</script>

<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>

  <p>{{ number + 1 }}</p>
  <p>{{ ok ? "Yes" : "No" }}</p>
  <p>{{ message.split("").reverse().join("") }}</p>
  <!-- 这是一个语句，而非表达式 ,另外条件控制也不行，要用三目运算符-->
  <!-- <p>{{ var a = 1 }}</p> -->

  <p>{{ rawHTML }}</p>
  <p v-html="rawHTML"></p>
</template>
