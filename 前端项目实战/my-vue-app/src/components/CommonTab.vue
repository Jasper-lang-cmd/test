<template>
  <div class="tags">
    <!-- 设置 closable 属性可以定义一个标签是否可移除。 它接受一个 Boolean。 -->
    <!-- 
           在Vue中，当使用v-for时，推荐为每个元素提供一个唯一的key值，这有助于Vue跟踪每个节点的身份，
        从而重用和重新排序现有元素，而不是重新渲染整个列表。 
      -->
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="route.name === tag.name ? 'dark' : 'plain'"
      @click="handleMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>
<script setup>
import { computed, effect, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAllDataStore } from "@/stores";

const store = useAllDataStore();
const tags = computed(() => store.state.tags);
const route = useRoute();
const router = useRouter();
const handleMenu = (tag) => {
  router.push(tag.name);
  store.selectMenu(tag);
};
const handleClose = (tag, index) => {
  //  通过pinia管理的
  store.updateTags(tag);
  //  如果点击的关闭的 tag 不是对应的当前页面
  if (tag.name !== route.name) return;
  if (index === store.state.tags.length) {
    store.selectMenu(tags.value[index - 1]);
    router.push(tags.value[index - 1].name);
  } else {
    store.selectMenu(tags.value[index]);
    router.push(tags.value[index].name);
  }
};
</script>
<style scoped lang="less">
.tags {
  margin: 20px 0 0 20px;
}
.el-tag {
  margin-right: 10px;
}
</style>
