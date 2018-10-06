import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

//bootstrap start
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//bootstratp end

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
