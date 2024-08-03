<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>Home</h3>
    <p>count = {{ $store.getters.getCounter }}</p>
    <p>{{ getCounter }}</p>
    <button @click="updataHandle">增加</button>
    <button @click="updataAsyncHandle">异步增加</button>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

// 快捷方案(第一步)
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {},
  computed: {
    ...mapGetters(["getCounter"]),
  },
  methods: {
    // 快捷方案（第二步）
    ...mapMutations(["updataCounter"]),
    ...mapActions(["asyncAddCounter"]),

    updataHandle() {
      // 固定调用方式
      // this.$store.commit("updataCounter", 10);

      // 快捷方案（第三步）
      this.updataCounter(10);
    },
    updataAsyncHandle() {
      // this.$store.dispatch("asyncAddCounter");
      this.asyncAddCounter();
    },
  },
};
</script>
