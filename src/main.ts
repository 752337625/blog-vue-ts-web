import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './pulgin/element'
import './assets/css/index.less'
//全局iconfont
import './assets/fonts/iconfont.css'
import './pulgin/router'

import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
Vue.component('vue-simplemde', VueSimplemde) 
Vue.config.productionTip = false
process.env.NODE_ENV == 'development' ? (<any>window).store =store : ''
process.env.NODE_ENV == 'development' ? (<any>window).router =router : '',

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
