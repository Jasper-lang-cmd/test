// 导入部分 : 指定加载
import { hello, getName as name } from "./hello";
// 导入全部 : 整体加载(as : 别名)
import * as op from "./hello";
console.log(hello);
console.log(op.hello);
name();

// 导入默认加载
import age from "./hello";
age();
