/**
 * 
         这段代码主要用于配置不同环境（开发环境、测试环境、线上环境）下的API基础路径和mock API的路径，
     以及一个通用的mock开关。它通过import.meta.env.MODE来获取当前环境的标识（比如development、test、prod），
     然后基于这个标识从EnConfig对象中选择相应的配置。如果import.meta.env.MODE不存在（在旧版本的Vite或不支持import.meta.env的环境中），
     则默认使用prod（线上环境）的配置。

 */

const env = import.meta.env.MODE || "prod";
const EnConfig = {
  // 开发环境
  development: {
    baseApi: "/api",
    mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
  },
  // 测试环境
  test: {
    baseApi: "//test.future.com/api",
    mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
  },
  // 线上环境
  prod: {
    baseApi: "//future.com/api",
    mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
  },
};

export default {
  env,
  ...EnConfig[env],
  // mock
  mock: false,
};
