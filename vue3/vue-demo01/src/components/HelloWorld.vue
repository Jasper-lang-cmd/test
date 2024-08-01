<template>
  <div class="hello">
    <!-- <p>{{ message.title }}</p> -->
  </div>
</template>
<script>
// 局部引入
// import axios from "axios";
// querystring : 转换
import querystring from "querystring";

// 封装
// 引入api
import api from "../api/index";

export default {
  data() {
    return {
      message: {},
    };
  },
  mounted() {
    // 封装
    api.getChnegpin().then((res) => {
      console.log(res.data);
    });

    // cnpm install --save axios (先退出导入axios)

    // // get 请求方式
    // axios({
    //   method: "get",
    //   url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
    // }).then((res) => {
    //   console.log(res.data);
    //   this.message = res.data.chengpinDetails[0];
    // });
    // // post 请求方式
    // // post 需要额外处理 :
    // //           1.安装依赖 : npm install --save querystring
    // //           2.转换数据格式 : querystring.stringify({})
    // axios({
    //   method: "post",
    //   url: "http://iwenwiki.com/api/blueberrypai/login.php",
    //   data: querystring.stringify({
    //     user_id: "iwen@qq.com",
    //     password: "iwen123",
    //     verification_code: "crfvw",
    //   }),
    // }).then((res) => {
    //   console.log(res.data);
    // });

    // 快捷方案 (get post)
    // this.$axios : 挂载全局时引用axios
    // this.$axios
    //   .get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // this.$axios
    //   .post(
    //     "http://iwenwiki.com/api/blueberrypai/login.php",
    //     querystring.stringify({
    //       user_id: "iwen@qq.com",
    //       password: "iwen123",
    //       verification_code: "crfvw",
    //     })
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  },
};
</script>
