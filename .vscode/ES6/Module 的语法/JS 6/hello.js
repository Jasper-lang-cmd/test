export var hello = "hello world";
export function getName() {
  console.log("可莉");
}

// 为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到 export default 命令，为模块指定默认输出。
// 一个文件中，默认只能存在一个 export default
export default function getAge() {
  console.log("刚满 18 岁！");
}
