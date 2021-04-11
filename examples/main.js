import Vue from 'vue'
import App from './App.vue'
import VinaUI from '../packages'

Vue.use(VinaUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
