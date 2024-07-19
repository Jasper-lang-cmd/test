<!-- 事件修饰符 -->
<template>
  <h3>事件修饰符</h3>
  <!-- .prevent等价于阻止默认事件（e.preventDefault();） -->
  <a @click.prevent="clickHandle" href="https://itbaizhan.com">百战程序员</a>
  <!-- 事件冒泡 : 触发了子元素的同时，冒泡到了父元素,触发了父元素的事件 -->
  <div @click="clickDiv">
    <!-- .stop等价于阻止事件冒泡（e.stopPropagation();） -->
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickHandle(e) {
      // 通过event对象，阻止默认事件
      // e.preventDefault();
      console.log("点击了");
    },
    clickDiv() {
      console.log("DIV");
    },
    clickP(e) {
      // 阻止事件冒泡
      // e.stopPropagation();
      console.log("P");
    },
  },
};
</script>
