<template>
  <div class="body-login">
    <el-form :model="loginForm" class="login-container">
      <h1>欢迎登录</h1>
      <el-form-item>
        <el-input
          type="input"
          placeholder="请输入账号"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, getCurrentInstance } from "vue";
import { useAllDataStore } from "@/stores";
import { useRouter } from "vue-router";
// reactive是Vue Composition API的一部分，用于创建一个响应式的对象。当你使用reactive函数包裹一个对象时，
// 这个对象的所有嵌套属性都会成为响应式的，即当这些属性的值发生变化时，任何依赖于这些属性的视图或计算属性都会自动更新。
// 在Vue组件中，如果你将这个loginForm对象用于表单的双向数据绑定，那么当用户输入用户名和密码时，
// loginForm.username和loginForm.password的值会实时更新，并且任何依赖于这些值的计算属性或视图都会自动反映这些变化。
const loginForm = reactive({
  username: "",
  password: "",
});
const { proxy } = getCurrentInstance();
const store = useAllDataStore();
const router = useRouter();
const handleLogin = async () => {
  const res = await proxy.$api.getMenu(loginForm);
  console.log(res);
  store.updateMenuList(res.menuList);
  store.state.token = res.token;
  store.addMenu(router);
  router.push("./home");
};
</script>

<style scoped lang="less">
.body-login {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/background_1.jpg");
  background-size: 100%;
  overflow: hidden;
}
.login-container {
  width: 400px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 250px auto;
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  /* 样式穿刺*/
  :deep(.el-form-item__content) {
    justify-content: center;
  }
}
</style>
