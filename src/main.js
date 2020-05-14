import Vue from "vue";
import App from "./App.vue";

import router from "./helpers/router";
import store from "./helpers/store";

import mixinTitle from "./mixins/title";
import mixinAuthGuard from "./mixins/auth-guard";

import "./helpers/axios";
import "./helpers/bootstrap";
import "./helpers/fontawesome";

Vue.config.productionTip = false;
Vue.mixin(mixinTitle);
Vue.mixin(mixinAuthGuard);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
