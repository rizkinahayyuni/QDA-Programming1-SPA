import Vue from 'vue';
import App from './App';
import router from './router';

import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import NavBarComponent from './components/NavBarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

Vue.use(BootstrapVue);

Vue.component('nav-bar-component', NavBarComponent);
Vue.component('footer-component', FooterComponent);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
