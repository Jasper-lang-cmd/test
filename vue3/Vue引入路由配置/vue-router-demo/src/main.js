import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// .use(router)是告诉Vue应用实例要使用Vue Router作为路由管理器。
// 这里的router是Vue Router的实例，它应该在你的项目中被创建并配置好路由规则。
// .use()方法使得Vue Router能够被集成到Vue应用中，允许你通过Vue组件来声明式地导航。
createApp(App).use(router).mount("#app");
