import axios from "axios";
// ElMessage 是 Element Plus 中的一个组件，用于显示全局的消息提示。
import { ElMessage } from "element-plus";

import config from "@/config";

const service = axios.create({
  baseURL: config.baseApi,
});
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use((res) => {
  //   console.log(res);
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else {
    const NETWORK_ERROR = "网络错误...";
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});
// // 封装请求函数
function request(options) {
  options.method = options.method || "get";
  // 关于 get 请求参数的调整
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  // 对 mock 的开关做一个处理
  let isMock = config.mock; // 从全局配置中获取 mock 标志
  if (typeof options.mock !== "undefined") {
    isMock = options.mock; // 如果 options 中指定了 mock，则覆盖全局设置
  }
  // 针对环境做一个处理
  if (config.env === "prod") {
    // 不能用mock(线上环境时，不用假数据)
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }
  return service(options);
}

export default request;
