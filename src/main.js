// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'material-design-icons-iconfont'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import vueScrollto from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(vueScrollto, {
  easing: 'ease',
  offset: -20
})
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
