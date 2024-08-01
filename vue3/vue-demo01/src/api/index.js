import axios from "../utils/request";
import path from "./path";

const api = {
  // 成品详情地址
  getChnegpin() {
    return axios.get(path.baseUrl + path.chengpin);
  },
};

export default api;
