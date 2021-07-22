import Vue from 'vue'
import app from './app.vue'
import {router} from './router'
import {store} from './store/store'
import './assets/styles/main.scss'
import './registerServiceWorker'
import VEmojiPicker from 'v-emoji-picker'

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
Vue.use(VEmojiPicker);

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app') 


