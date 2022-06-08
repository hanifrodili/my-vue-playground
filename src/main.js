import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import EvaIcons from 'vue-eva-icons'

Vue.config.productionTip = false
Vue.use(EvaIcons)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
