import item1 from "@/components/main/item1"
export default (Vue) => {
    // console.log(Vue);
    // 配置全局组件指令
    Vue.directive("test", (el, binding, vnode) => {
        el.onclick = function () {
            alert("ok")
        }
    })

    Vue.component("item1", item1);
}