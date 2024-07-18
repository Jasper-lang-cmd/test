<!-- 通过 key 来管理状态 -->
<!-- “就地更新（交换位置），而非重新渲染” -->
<!-- key 在这里是一个通过 v-bind 绑定的特殊 attribute -->
<!-- 推荐在任何可行的时候为 v-for 提供一个 key attribute  -->
<!-- key 绑定的值期望是一个基础类型的值，例如字符串或者 number 类型 -->
<template>
  <h3>Key属性添加到v-for中</h3>
  <!-- <p v-for="(item, index) in names" :key="index">{{ item }}</p> -->
  <!-- 不推荐使用 index  -->
  <!-- 确保每一条数据的唯一索引不会发生变化 -->
  <div v-for="item in result" :key="item.id">
    <p>{{ item.title }}</p>
    <img :src="item.avator" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: ["2141103201", "玉墨良", "op"],
      result: [
        {
          id: 2261677,
          title:
            "鄂尔多斯|感受一座城市的璀璨夜景 感受一座城市，除了白日里的车水马龙，喧嚣繁华",
          avator: "https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451",
        },
        {
          id: 2261566,
          title:
            "成都这家洞穴暗黑风咖啡厅酷毙了!早c晚A走起“ 成都天气这么热。 咖啡*人必",
          avator: "https://pic.qyer.com/avatar/011/07/08/69/200?v=1572185180",
        },
        {
          id: 2261662,
          title:
            "【川西新龙-措卡湖】措卡湖，意为“乱石丛中的黑色海水”，神秘小众 原汁原味",
          avator: "https://pic,qyer,com/avatar/009/88/48/58/200?v=1507386782",
        },
      ],
    };
  },
};
</script>
