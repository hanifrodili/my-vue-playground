import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import EvaIcons from 'vue-eva-icons'

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(EvaIcons)
Vue.use(VueFroala)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
