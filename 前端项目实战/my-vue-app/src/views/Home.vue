<template>
  <!-- gutter 属性是 <el-row> 组件的一个 prop，用于控制列之间的间隔大小。 -->
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <!-- card 卡片 -->
      <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" class="user" />
          <div class="user-info">
            <p class="user-info-admin">Admin</p>
            <p class="user-info-p">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间 : <span>2024-06-30</span></p>
          <p>上次登录地点 : <span>北京</span></p>
        </div>
      </el-card>

      <!-- table -->
      <el-card class="user-table" shadow="hover">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          v-for="item in countData"
          :key="item.name"
        >
          <component
            :is="item.icon"
            class="icons"
            :style="{ background: item.color }"
          ></component>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">￥{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 第一个图表渲染 -->
      <el-card class="top-echart">
        <div ref="echart" style="height: 280px"></div>
      </el-card>
      <!-- 第二,三个图表渲染 -->
      <div class="graph">
        <el-card>
          <div ref="userEchart" style="height: 240px"></div>
        </el-card>
        <el-card>
          <div ref="videoEchart" style="height: 240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from "vue";
// 引入echarts
import * as echarts from "echarts";

// Vue 3 使用了 ES6 的 Proxy 特性来拦截和定制对组件数据的访问，从而实现响应式系统的更新和依赖追踪。
// proxy 是 Vue 3 内部实现响应式系统的一个重要机制
// getCurrentInstance 是 Vue 3 Composition API 中的一个函数，它允许你在 setup() 函数或生命周期钩子（如 onMounted、onUpdated 等）内部访问当前组件的实例。
const { proxy } = getCurrentInstance();

// 引入 axios
// Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。
// import axios from "axios";

const getImageUrl = (user) => {
  return new URL(`../assets/images/${1}.jpg`, import.meta.url).href;
};
// table 数据
const tableData = ref([
  // {
  //   name: "Java",
  //   todayBuy: 100,
  //   monthBuy: 200,
  //   totalBuy: 300,
  // },
  // {
  //   name: "Python",
  //   todayBuy: 100,
  //   monthBuy: 200,
  //   totalBuy: 300,
  // },
]);
const countData = ref([]);
const chartData = ref([]);
const observer = ref(null);
// tableLabel用于定义表格列的标题，键对应tableData中对象的属性名
const tableLabel = ref({
  name: "课程",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买",
});

// axios({
//   url: "api/home/getTableData",
//   method: "get",
// }).then((res) => {
//   console.log(res.data);
//   //   制造假数据，把交互请求的流程 根据接口文档跑通 还要制造出数据
//   //   mockjs : 一种工具 拦截请求，把我们制造的数据 根据接口文档来的
//   if (res.data.code === 200) {
//     console.log(res.data.data.tableData);
//     tableData.value = res.data.data.tableData;
//   }
// });

//这个是折线图和柱状图 两个图表共用的公共配置
// echarts 官网
const xOptions = reactive({
  // 图例文字颜色
  textStyle: {
    color: "#333",
  },
  legend: {},
  grid: {
    left: "20%",
  },
  // 提示框
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category", // 类目轴
    data: [],
    axisLine: {
      lineStyle: {
        color: "#17b3a3",
      },
    },
    axisLabel: {
      interval: 0,
      color: "#333",
    },
  },
  yAxis: [
    {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#17b3a3",
        },
      },
    },
  ],
  color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
  series: [],
});

const pieOptions = reactive({
  tooltip: {
    trigger: "item",
  },
  legend: {},
  color: [
    "#0f78f4",
    "#dd536b",
    "#9462e5",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: [],
});

const getTableData = async () => {
  const data = await proxy.$api.getTableData();
  // console.log(data);
  tableData.value = data.tableData;
};
const getCountData = async () => {
  const data = await proxy.$api.getCountData();
  console.log(data);
  countData.value = data;
};
const getChartData = async () => {
  const { orderData, userData, videoData } = await proxy.$api.getChartData();

  // 对第一个图表进行 x轴 和 series 赋值
  xOptions.xAxis.data = orderData.date;
  xOptions.series = Object.keys(orderData.data[0]).map((val) => ({
    name: val,
    data: orderData.data.map((item) => item[val]),
    type: "line",
  }));
  const oneEchart = echarts.init(proxy.$refs["echart"]);
  oneEchart.setOption(xOptions);

  // 对第二个表格进行渲染
  xOptions.xAxis.data = userData.map((item) => item.date);
  xOptions.series = [
    {
      name: "新增用户",
      data: userData.map((item) => item.new),
      type: "bar",
    },
    {
      name: "活跃用户",
      data: userData.map((item) => item.active),
      type: "bar",
    },
  ];
  const twoEchart = echarts.init(proxy.$refs["userEchart"]);
  twoEchart.setOption(xOptions);

  // 对饼状图（第三个）进行渲染
  pieOptions.series = [
    {
      data: videoData,
      type: "pie",
    },
  ];
  const threeEchart = echarts.init(proxy.$refs["videoEchart"]);
  threeEchart.setOption(pieOptions);

  // 监听页面的变化
  // 如果监听到容器大小发生变化，那么改变了以后，会执行这个回调函数
  observer.value = new ResizeObserver((en) => {
    oneEchart.resize();
    twoEchart.resize();
    threeEchart.resize();
  });

  // 容器存在
  if (proxy.$refs["echart"]) {
    observer.value.observe(proxy.$refs["echart"]);
  }
};
onMounted(() => {
  getTableData();
  getCountData();
  getChartData();
});
</script>
<style scoped lang="less">
.home {
  height: 100%;
  overflow: hidden;
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info {
      p {
        line-height: 40px;
      }
      .user-info-p {
        color: #999;
      }
      .user-info-admin {
        font-size: 35px;
      }
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  .user-table {
    margin-top: 20px;
  }
  .num {
    display: flex;
    // 当flex-wrap的值为wrap时，意味着如果flex容器的子元素总宽度（或总高度，取决于flex方向）超过了flex容器的宽度（或高度），
    // 那么子元素将会换行显示，而不是保持在一行（或一列）内被压缩。
    flex-wrap: wrap;
    // justify-content: space-between; 是CSS Flexbox布局中的一个属性设置，用于在主轴（main axis）上对齐flex容器的子元素。
    // 当使用 space-between 值时，它会将第一个子元素放置在起始位置，将最后一个子元素放置在结束位置，然后剩余的空间会平均分布在中间子元素之间。
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icons {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 15px;
        text-align: center;
        color: #999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
      height: 260px;
    }
  }
}
</style>
