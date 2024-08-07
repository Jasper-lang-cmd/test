/**
 * 整个项目 api 的管理
 */

import request from "./request";

// 请求首页左侧的表格的数据
export default {
  getTableData() {
    return request({
      url: "api/home/getTableData",
      method: "get",
    });
  },
};
