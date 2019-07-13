<template>
  <div>
    <div>我是测试页</div>
    <item1></item1>
  <!-- <button v-test>全局指令</button> -->
<button @click="test2">全局事件</button>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  mounted(){
    // console.log(this.$route.query);  获取路由id值
  },
  methods:{
    test2(){
      this.$eventHub.$emit("test1","111111")
    }
  }
};
</script>
<style lang="">
</style>