// 这是我们整个包的入口，这里必须导出install

import Button from './button.vue'
import Checkbox from './checkbox.vue'

const components=[
    Button,Checkbox
]
//定义install

const install =function(Vue){
    console.log("123")
    // 在这里注册所有组件
    components.forEach((item) => {
        Vue.component(item.name,item)
    })

}

// 勇敢插件的还要知道，像vue.router这种插件，我们不用调用use的，因为我们全局引入vue-router
// Vue.js 官方提供的一些插件 (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()。然而在像 CommonJS 这样的模块环境中，你应该始终显式地调用 Vue.use()
if(typeof window!=='undefined' &&window.Vue){
    install(window.Vue)
}


// 导出install
export default {
    install
} 