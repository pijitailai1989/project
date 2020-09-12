// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/global.css'
import '@/assets/css/animate.css'
import store from './vuex/index.js'
Vue.use(ElementUI);
Vue.config.productionTip = false

const requireComponents = require.context('./components',true,/\.vue/)
requireComponents.keys().forEach(fileName => {
 const reqCom = requireComponents(fileName)
 const reqComName = reqCom.default['name']
 Vue.component(reqComName,reqCom.default || reqCom)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
