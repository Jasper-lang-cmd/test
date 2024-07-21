<template>
  <h3>Chlid</h3>
  <p>{{ title }}</p>
  <p>{{ age }}</p>
  <ul>
    <li v-for="(name, index) of names" :key="index">{{ name }}</li>
  </ul>

  <p>{{ userInfo }}</p>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "age", "names", "userInfo"],
};
</script>
