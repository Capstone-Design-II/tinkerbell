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
      path: '/',
      name: 'main',
      component: require('@/pages/MainFrame').default,
      children: [
        {
          path: 'writing'
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
      redirect: '/'
    }
  ]
})
