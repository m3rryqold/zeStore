// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bulma/css/bulma.css';
import VeeValidate from 'vee-validate';
// import Buefy from 'buefy';
// import 'buefy/lib/buefy.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

Vue.use(VeeValidate);
Vue.use(Bootstrap);
// Vue.use(Buefy);
