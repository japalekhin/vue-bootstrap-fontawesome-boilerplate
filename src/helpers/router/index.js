import Vue from 'vue'
import Router from 'vue-router'

import dashboard from '@/views/components/dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: dashboard
    }
  ]
});
