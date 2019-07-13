<template>
  <div>
    <div>我是新闻页</div>
    <h1>名字:{{name}}</h1>
    <h1>单价:{{price}}</h1>
    <h1>总价:{{count}}</h1>
    <div>
      <button @click="add">+</button>
      <span>数量:{{num}}</span>
      <p>
        <button @click="test">test</button>
      </p>
    </div>
    <div v-show="isTopic" style="width:50px;height:50px;background:red;"></div>
    <button @click="test2">测试异步</button>
    <span>{{isTopic}}</span>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted(){
    // this.$apis.getItem().then(res => {
    //   console.log(res);
    // });
    // console.log(this.$route);

    // console.log(mapState(["name"])); // 返回{name: ƒ}

  },
  methods:{
    ...mapMutations(["add"]),
    ...mapActions(["test","test2"]),
  },
  computed:{
    ...mapState(["name","num","price","isTopic"]),
    ...mapGetters(["count"]),
  }
};
</script>
<style lang="">
</style>