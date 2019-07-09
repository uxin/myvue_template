<template>
  <div>
    <ul>
      <li v-for="(i,index) in routerList" :key="index">
        <router-link :to="i.path">{{i.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerList: [
        { path: "/info", name: "信息页" },
        { path: "/news", name: "新闻页" },
        { path: "/test", name: "测试页" }
      ]
    };
  }
};
</script>
<style lang="">
ul {
  overflow: hidden;
  text-align: center
}
li {
  list-style: none;
  margin: 0 29px;
  float: left;

}
</style>