<template>
  <div>
    <div>我是信息页
      <i class="fa fa-heartbeat fa-lg"></i>
    </div>
    <!-- 第一种路由传参,刷新不丢失   :to="{path:'test',query:{id:'11211113213234234'}}" -->
    <!-- <router-link :to="{path:'test',query:{id:'11211113213234234'}}">测试</router-link> -->
    <!-- <button @click="test">测试按钮</button> -->
    <!-- <button @click="testItem">测试接口</button> -->
    <!-- <div class="box1"></div> -->
    <!-- <div class="box2"></div> -->
    <!-- <h1>{{$store.state.num}}</h1> -->
    <!-- <button @click="add">测试</button> -->

    <h1>名字:{{$store.state.name}}</h1>
    <h1>单价:{{$store.state.price}}</h1>
    <h1>总价:{{$store.getters.count}}</h1>
    <div>
      <button @click="$store.commit('add')">+</button>
      <span>数量:{{num}}</span>
      <p>
        <button @click="$store.dispatch('test')">test</button>
      </p>
    </div>
    <div v-show="isTopic" style="width:50px;height:50px;background:red;"></div>
    <mint_but @click="test2">测试异步</mint_but>
    <span>{{isTopic}}</span>

    <hr/>
    <button @click="getMockData">模拟数据</button>
  </div>
</template>
<script>
import axios from "axios";
import Mock from "mockjs";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      topic: []
    };
  },
  watch: {
    // topic() {
    // console.log(this.topic);  // 获取topic数据
    // }

    isTopic() {
      console.log(this.$store.state.topic); // 获取topic数据
    }
  },
  computed: {
    // ...mapState(["isTopic"])  //声明属性
    num() {
      return this.$store.state.num;
    },
    isTopic() {
      return this.$store.state.isTopic;
    }
  },
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
    },
    // add() {
    //   this.$store.commit("add","abc");
    // }
    // add(){
    //   this.$store.dispatch("test","abc");
    // }
    add() {},
    test2() {
      this.$store.dispatch("test2");
    },

    getMockData(){
      this.$apis.login({uname:"123456",upwd:"123456"}).then((res)=>{
        console.log(res);
      })
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
    // this.$eventHub.$on("test1",(res)=>{
    //   alert(res);
    // })

    // this.num=this.$store.state.num;
    // setTimeout(() => {
    //   console.log(this.$store.state.topic); // 获取topic数据
    // }, 1000);

    // if (this.$store.state.isTopic) {
    //   this.topic = this.$store.state.topic;
    //   console.log(this.topic);  // 获取topic数据
    // }

    // var Mock = require("mockjs");
    // var data = Mock.mock({
    //   // 属性 list 的值是一个数组，其中含有 1 ~ 10 个元素
    //   "list|1-10": [
    //     {
    //       // 属性 id 是一个自增数，起始值为 1，每次增 1
    //       "id|+1": 1
    //       // name:"123"
    //     }
    //   ]
    // });
    // console.log(data);
  }
};
</script>
<style scoped lang="scss">
// .box1 {
//   width: 100px;
//   height: 100px;
//   background-color: aqua;
// }
// .box2 {
//   width: r(100);
//   height: r(100);
//   background-color: yellowgreen;
// }
</style>