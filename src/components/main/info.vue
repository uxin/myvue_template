<template>
  <div>
    <div>我是信息页</div>
    <!-- 第一种路由传参,刷新不丢失   :to="{path:'test',query:{id:'11211113213234234'}}" -->
    <!-- <router-link :to="{path:'test',query:{id:'11211113213234234'}}">测试</router-link> -->
    <button @click="test">测试按钮</button>
  </div>
</template>
<script>
export default {
  methods:{
    //第二种函数内部跳转方式(常用)
    test(){
      this.$router.push({path:"/test",query:{id:"1232134234345666"}})
    }
  }
};
</script>
<style lang="">
</style>