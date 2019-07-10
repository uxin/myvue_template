// 定义全局指令

export default (Vue) => {
    Vue.directive("test", (el, binding, vnode) => {
        el.onclick = function () {
            alert("ok")
        }
    })
}