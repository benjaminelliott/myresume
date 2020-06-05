import Vue from 'vue'
import App from './App.vue'

import VueMeta from 'vue-meta'
Vue.use(VueMeta);

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faToggleOn, faToggleOff, faPhone, faEnvelope, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss3, faJs, faBootstrap, faVuejs, faPython, faSass, faReact, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

library.add(faHtml5, faCss3, faJs, faBootstrap, faVuejs, faCoffee, faPython, faSass, faReact, faGithub, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faToggleOn, faToggleOff, faPhone, faInstagram, faEnvelope, faWindowMaximize, faWindowMinimize);
dom.watch();

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
}).$mount('#app')
