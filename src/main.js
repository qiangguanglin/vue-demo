import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import routes from './router';
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  routes, // `routes: routes` 的缩写
})
Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(router)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
