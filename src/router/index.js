import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      redirect: "info",  //重定向

      children: [
        {
          path: "info",
          name: 'info',
          component: resolve => require(['@/components/main/info'], resolve)
        },
        {
          path: "news",
          name: 'news',
          component: resolve => require(['@/components/main/news'], resolve),
          redirect: "/news/item1",  //重定向
          children:[
            {
              path: "item1",
              name: 'item1',
              component: resolve => require(['@/components/main/item1'], resolve),
            },
            {
              path: "item2",
              name: 'item2',
              component: resolve => require(['@/components/main/item2'], resolve),
            },
          ]
        },
        {
          path: "test",
          name: 'test',
          component: resolve => require(['@/components/main/test'], resolve)
        },
      ]
    }
  ]
})


// console.dir(routers)

// beforeEach(()=>{})  //全局路由钩子函数,其中有三个参数
// 参数1: 到哪个地址去
// 参数2: 从哪个地址来
// 参数3: 控制是否到下一个路由
// 注:此页面用了beforeEach()全局路由钩子函数时,就不要用到重定向了
// 作用:适用于混合开发,通过参数跳转项目的位置
// 全局路由钩子函数, 每当路由发生变化, 触发

// routers.beforeEach((to, from, next) => {
//   // console.log(to, from);
//   if (to.path == "/") {
//     if (location.search.indexOf("news") != -1) {
//       next({ path: "/news" });
//     } else if (location.search.indexOf("info") != -1) {
//       next({ path: "/info" });
//     } else if (location.search.indexOf("test") != -1) {
//       next({ path: "/test" });
//     } else {
//       next();  // 前往下一个路由
//     }
//   } else {
//     next();  // 前往下一个路由
//   }
// })

// // afterEach(()=>{})  跳转之后才执行
// routers.afterEach((to, from) => {
//   console.log("跳转之后执行");
// })

export default routers;
