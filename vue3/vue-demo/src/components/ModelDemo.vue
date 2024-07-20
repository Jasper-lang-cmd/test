<!-- v-model : 在表单控件元素上创建双向数据绑定。 -->

<!-- 确保了数据与DOM之间的同步 :

               当用户在输入框中输入内容时，数据会自动更新；
               反之，当数据变化时，输入框中的内容也会随之更新。 
 -->
<template>
  <h3>表单输入绑定</h3>
  <form>
    <!-- v-model修饰符 例如 : .lazy .number .trim -->
    <!-- 这里的 .lazy 作用 : 
        
          默认情况下，v-model 会在 input 事件后更新数据，
          添加 lazy 修饰符来改为在每次 change 事件后更新数据。
     -->
    <input type="text" v-model.lazy="message" />
    <p>{{ message }}</p>
    <!-- 复选框 : 单一的复选框，绑定布尔类型值 -->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      checked: false,
    };
  },
};
</script>
