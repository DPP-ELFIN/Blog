import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'


//全局样式
import './assets/css/global.css'

//全局过滤器
Vue.filter('showAll',function(value){
	
	return value.slice(0,100) + '...'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
