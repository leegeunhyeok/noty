import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'

import apolloClient from './apollo-client'

Vue.use(VueApollo)
Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
