import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: require('@/pages/Login').default
    },
    {
      path: '/main',
      name: 'main',
      component: require('@/pages/MainFrame').default,
      children: [
        {
          path: 'writing',
          name: 'writing',
          component: require('@/pages/Login').default
        },
        {
          path: 'meetings'
        },
        {
          path: 'meeting/:id'
        }
      ]
    },
    {
      path: '*',
      redirect: '/main/writing'
    }
  ]
})
