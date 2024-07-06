<!-- 列表渲染 : 

             我们可以使用 v-for 指令基于一个数组来渲染一个列表。
             v-for 指令的值需要使用 item in items 形式的特殊语法，
          其中 items 是源数据的数组，而 item 是迭代项的别名。
           

-->

<!-- 复杂数据
 
           大多数情况，我们渲染的数据源来源于网络请求，也就是 JSON 格式。

-->

<script>
export default {
  data() {
    return {
      names: ["唱歌", "跳舞", "打篮球"],
      //   复杂数据
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
      userinfo: {
        name: "蔡徐坤",
        age: 28,
        sex: "男",
      },
    };
  },
};
</script>

<template>
  <h3>列表渲染</h3>
  <!-- <p v-for="item in names">{{ item }}</p> -->
  <!-- v-for 也支持使用可选的第二个参数表示当前项的位置索引。 -->
  <!-- in 可以用 of代替，这更接近JavaScript的迭代器语法。 -->
  <p v-for="(item, index) in names">{{ item }}-{{ index }}</p>
  <!-- 复杂数据 -->
  <div class="op" v-for="item in result">
    <p>{{ item.title }}</p>
    <img :src="item.avator" alt="" />
  </div>
  <!-- 也可以使用 v-for 来遍历一个对象的所有属性。 -->
  <div>
    <p v-for="item of userinfo">{{ item }}</p>
    <p v-for="(value, key, index) of userinfo">
      {{ value }}-{{ key }}-{{ index }}
    </p>
  </div>
</template>
<style>
.op {
  color: burlywood;
  font-size: 16px;
}
</style>
