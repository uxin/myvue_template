import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      redirect: "info",  //重定向

      children: [
        {
          path: "info",
          component: resolve => require(['@/components/main/info'], resolve)
        },
        {
          path: "news",
          component: resolve => require(['@/components/main/news'], resolve)
        },
        {
          path: "test",
          component: resolve => require(['@/components/main/test'], resolve)
        },
      ]
    }
  ]
})
