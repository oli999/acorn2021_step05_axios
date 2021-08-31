import Vue from 'vue'
import App from './App8.vue'
import axios from 'axios'

Vue.config.productionTip = false

//모든 Vue 컴포넌트에서 this.$axios 로 참조할수 있도록 설정
Vue.prototype.$axios = axios;

//base url 설정 
axios.defaults.baseURL="http://localhost:8888/spring05"

new Vue({
  render: h => h(App),
}).$mount('#app')
