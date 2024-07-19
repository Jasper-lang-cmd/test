<template>
  <h3>方法事件处理器</h3>
  <!-- v-on:click="" 等价于 @click="" -->
  <button @click="addCount">Add</button>
  <p>{{ count }}</p>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  //   所有的方法或者函数都放在methods里。
  methods: {
    // event 对象
    addCount(e) {
      // 读取到 data 里面的数据的方案 : this.count
      this.count++;
      //   Vue中的event对象，就是原生JS的Event对象。
      e.target.innerHTML = "Add" + this.count;

      //   console.log(this.count);
    },
  },
};
</script>
