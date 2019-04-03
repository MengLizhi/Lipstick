import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from '@/api/apiList';

import 'assets/stylus/base.styl'

Vue.prototype.$API = api;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
