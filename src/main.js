// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/css/index.scss'
import 'font-awesome/css/font-awesome.css'

import store from "@/core/store/index";

// 1.引入 core.config.js
import core from "@/core/core.config.js"
// 2.暴露core函数,use会把全局的Vue构造函数暴露出去
Vue.use(core);


Vue.config.productionTip = false;
// import mock from "@/mock/index"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
