import Vue from 'vue'
import directive from "@/core/directive/index";  //index可以省略,会自动找index.js
import commonTemp from "@/components/commonTemp/index";
import global from "@/core/global/index";
import apis from "@/core/api/index";

// console.log(global);
export default (Vue) => {
    directive(Vue);   //注册全局指令
    commonTemp(Vue);  //注册全局组件
    Vue.prototype.$global = global;  //绑定到原型
    Vue.prototype.$apis = apis;  //代理
    Vue.prototype.$eventHub = new Vue();  //注册全局事件
}