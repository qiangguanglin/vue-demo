import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Layout from './components/layout.vue'
import TextContent from './components/text-content.vue'
import 'element-ui/lib/theme-chalk/index.css'
import routes from './router'
import VueRouter from 'vue-router'
import './utils/style.scss'

const router = new VueRouter({
  mode: 'history',
  routes, // `routes: routes` 的缩写
})
Vue.use(ElementUI)
Vue.component('layout', Layout)
Vue.component('textContent', TextContent)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
