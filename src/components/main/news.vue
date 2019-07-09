<template>
  <div>
    <div>我是新闻页</div>
    <router-link to="/news/item1">国际新闻</router-link>
    <router-link to="/news/item2">国内新闻</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {}, //生命周期

  // 路由钩子函数比生命周期提前执行,所以在控制跳转时不会显示页面效果
  // beforeRouteEnter() 路由进入
  beforeRouteEnter(to, from, next) {
    next();
  },

  // beforeRouteLeave() 路由离开
  beforeRouteLeave(to, from, next) {
    next();
  },

  // beforeRouteUpdate() 子路由进入
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>
<style lang="">
</style>