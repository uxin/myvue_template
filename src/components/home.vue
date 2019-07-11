<template>
  <div>
    <lay_head></lay_head>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- keepAlive=true 时就不加载,反之加载 -->
  </div>
</template>

<script>
import lay_head from "@/components/layout/head";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    lay_head
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>
