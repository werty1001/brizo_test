
import Vue from 'vue'
import axios from 'axios'

import router from '@/router/index'
import App from '@/App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$notice = new Vue()
Vue.prototype.$axios = axios
store.$axios = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
