import Vue from 'vue';
import App from '@/App';

import router from '@/helpers/router';

import '@/helpers/bootstrap';
import '@/helpers/fontawesome';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
