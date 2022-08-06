import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from "vue-gtag";
import './registerServiceWorker'

console.log(process.env.NODE_ENV)

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "UA-33523145-1" },
  pageTrackerTemplate(to){
    return{
      page_path: '/jfk-60th-anniversary'+to.path
    }
  }
}, router);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
