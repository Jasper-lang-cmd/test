<!-- 条件渲染

          v-if : 用于条件性地渲染一块内容。这块内容只会在指令的表达式为真值时才会被渲染。
          v-else : 使用 v-else 为 v-if 添加一个“else 区块”。
          v-else-if : 提供的是相应于 v-if 的“else if区块”。它可以连续多次重复使用。
          v-show : 另一个可以用来按条件显示一个元素的指令是 v-show .其基本用法一样。 

-->

<!-- 注意 : 
 
          v-if 是“真实的”按条件渲染，即为true时，才会渲染。
          （切换时，条件区块内的事件监听器和子组件都会被销毁与重建，有更高的切换开销）

          v-show 简单得多，元素无论条件如何，都会被渲染，只有CSS display 属性会被切换。
          （有更高的初始渲染开销）

-->
<script>
export default {
  data() {
    return {
      flag: true,
      type: "A",
    };
  },
};
</script>
<template>
  <h3>条件渲染</h3>
  <!-- v-if -->
  <div v-if="flag">What can i say ?</div>
  <!-- v-else -->
  <div v-else>Man</div>
  <!-- v-else-if -->
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>NOT A/B/C</div>
  <!-- v-show -->
  <div v-show="flag">肘击</div>
</template>
