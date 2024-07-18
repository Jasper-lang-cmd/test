<template>
  <h3>内联事件处理器</h3>
  <!-- v-on:click="" 等价于 @click="" -->
  <button @click="count++">Add</button>
  <p>{{ count }}</p>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
