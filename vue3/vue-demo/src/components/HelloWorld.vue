<!-- 属性绑定 -->
<!-- 
     双大括号不能在HTML attributes 中使用。 
     想要响应式地绑定一个 attributes ，应该使用 v-bind 指令。
-->

<!-- 注意 : 
      v-bind 指令指示Vue的元素的 id attribute与组件的 dynamicld 属性保持一致。
      如果绑定的值是 null 或者 undefined ,那么该 attribute 将会从渲染的元素上移除。
      简写形式 : 冒号 即 v-bind 等价于 :
-->

<!-- 布尔型（Attribute）
      依据true / false 值来决定 attribute 是否应该存在于该元素上，disabled 就是最常见的例子。 
-->
<script>
export default {
  data() {
    return {
      dynamicClass: "appclass",
      dynamicId: "appid",
      dynamicTitle: null,
      isButtonDisabled: true,
      // 包含多个attribute的JavaScript对象
      objectofAttributes: {
        class: "appclass",
        id: "appid",
      },
    };
  },
};
</script>

<template>
  <div
    v-bind:id="dynamicId"
    v-bind:class="dynamicClass"
    v-bind:title="dynamicTitle"
  >
    测试
  </div>

  <!-- 布尔型 -->
  <button :disabled="isButtonDisabled">button</button>

  <!-- 动态绑定多个值 -->
  <div :="objectofAttributes">测试02</div>
</template>

<style>
#appid {
  color: red;
  font-size: 30px;
}
</style>
