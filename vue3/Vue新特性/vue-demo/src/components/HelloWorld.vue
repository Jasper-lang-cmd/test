<template>
  <div class="hello">
    <p>{{ message }}</p>
    <ul>
      <li v-for="(name, index) of names.list" key="index">{{ name }}</li>
    </ul>
    <button @click="clickHandle">点击</button>
    <p>{{ msg }}</p>
    <p>{{ msg1 }}</p>
  </div>
  <!-- 
   
  setup()中使用props和context 

    在2.x中，组件的方法中可以通过this获取到当前组件的实例，并执行data变量的修改，
    方法的调用，组件的通信等等，但是在3.x中，setup()在beforeCreate和created时机就已调用，
    无法使用和2.x一样的this，但是可以通过接收setup(props,ctx)的方法，获取到当前组件的实例和props

   
   -->
</template>

<script>
// 需要什么，引入什么
import { reactive, ref } from "vue";
// 生命周期函数
import { onMounted } from "vue";
// 引入inject
import { inject } from "vue";
export default {
  props: {
    msg: String,
  },
  name: "HelloWorld",
  // 组合式API
  setup(props, ctx) {
    // 接收数据
    const msg1 = inject("message");

    // onMounted
    // 比以前有优势，以前同一个生命周期函数只能存在一个，现在可以存在多个
    onMounted(() => {
      console.log("生命周期函数 :onMounted1");
    });
    onMounted(() => {
      console.log("生命周期函数 :onMounted2");
    });

    // 获取到当前组件的实例
    console.log(ctx);
    // ref(用ref() 代替掉了 data())
    const message = ref("信息");
    // reactive（对象等,较复杂的数据）
    const names = reactive({
      list: ["qiqi", "keli", "diaona"],
    });
    // 定义方法
    function clickHandle() {
      // 通过message的value去修改数据
      message.value = "新信息";
      console.log("点击了");
    }
    // props(传递数据)
    const msg = props.msg;
    return {
      message,
      names,
      clickHandle,
      msg,
      msg1,
    };
  },
};
</script>
