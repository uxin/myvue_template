import Vue from "vue"
import Vuex from "vuex";
import apis from "@/core/api/index";
import { Indicator } from 'mint-ui';
Vue.use(Vuex)

// 组件内部的data,作用:全局状态管理和通信
const state = { //单项数据流,定义属性
    name:"苹果",
    price: 15,
    num: 0,
    // topic: [],
    isTopic: false
}
// 定义同步方法 methods   调用 this.$store.commit("mutations里的方法",val)
const mutations = { //同步方法
    add(state) {
        state.num++
    }
}

// 定义 compunted
const getters = {  //用于属性计算
    count(state) {
        return state.num * state.price
    }
}

// 定义异步方法,通用接口调用 this.$store.dispatch("actions里的方法",val)
// context可以调用mutations方法和actions自己的方法,还可以使用getters和state
const actions = {
    test(context, data) {
        console.log(context);
        // context.dispatch("test2", data)
        apis.getItem().then((res) => {
            // console.log(res.data.data.replies);
            // setTimeout(()=>{
            // context.state.topic = res.data.data.replies
            // context.state.isTopic = true
            // },3000)
        })
    },
    test2(context, data) {
        console.log("ok");
        Indicator.open("正在拼命加载中...")
        setTimeout(()=>{
            Indicator.close();
            context.state.isTopic=true
        },4000)
    }

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
