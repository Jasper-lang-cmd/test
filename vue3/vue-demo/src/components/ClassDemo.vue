<template>
  <!-- 绑定对象 -->
  <p :class="{ active: isActive, 'text-danger': hasError }">Class样式绑定</p>
  <!-- 绑定多个对象 -->
  <p :class="classObject">可莉</p>
  <!-- 绑定数组 -->
  <p :class="[arrActive, arrHasError]">迪奥娜</p>
  <p :class="[isActive ? 'active' : '']">七七</p>
  <!-- 数组和对象嵌套过程中，只能是数组嵌套对象，而不能反之。 -->
  <p :class="[isActive ? 'active' : '', { 'text-danger': hasError }]">早柚</p>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      classObject: {
        active: true,
        "text-danger": true,
      },
      arrActive: "active",
      arrHasError: "text-danger",
    };
  },
};
</script>
<style>
.active {
  font-size: 30px;
}
.text-danger {
  color: red;
}
</style>
