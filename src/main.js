import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Element from 'element-ui'
import router from './router'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.use(Element);

import axios from 'axios'
import components from '@/components/components.js'
Vue.prototype.$axios = axios
Vue.use(components)

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('@/assets/images/default.png')
})

Vue.config.productionTip = false
new Vue({ 
  router,
  store,
  render: h => h(App),
}).$mount('#app')
