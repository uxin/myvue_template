<template>
  <div>
    <div>我是信息页</div>
    <!-- 第一种路由传参,刷新不丢失   :to="{path:'test',query:{id:'11211113213234234'}}" -->
    <!-- <router-link :to="{path:'test',query:{id:'11211113213234234'}}">测试</router-link> -->
    <!-- <button @click="test">测试按钮</button> -->
    <button @click="testItem">测试接口</button>
    <div class="box"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    //第二种函数内部跳转方式(常用)
    // test(){
    //   this.$router.push({path:"/test",query:{id:"1111111"}})
    // },
    testPhp() {
      this.$apis.getPhp().then(res => {
        console.log(res);
      });
    },
    testItem() {
      this.$apis.getItem().then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    // console.log(this.$global.getParam());
    // console.log(this.$apis.getTopics());
    // this.$apis.getTopics().then((res)=>{
    //   console.log(res);
    // })
    // this.$apis.getTopics();
    // 并发监听
    // axios.all([this.$apis.getTopics(), this.$apis.getItem()]).then(
    //   axios.spread(function(acct, perms) {
    //     // 两个请求现在都执行完成
    //     console.log(acct, perms);
    //   })
    // );

    // this.$apis.getItem().then(res => {
    //   console.log(res);
    // });

    // console.log(this.$route);
  }
};
</script>
<style scoped lang="scss">
// .box{
//   width: r(100);
//   height: r(100);
//   background-color: aqua;
// }
</style>