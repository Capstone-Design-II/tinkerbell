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
      path: '/signup',
      name: 'signup',
      component: require('@/pages/Signup').default
    },
    {
      path: '/registervoice',
      name: 'registervoice',
      component: require('@/pages/RegisterVoice').default
    },
    {
      path: '/main',
      name: 'main',
      component: require('@/pages/MainFrame').default,
      children: [
        {
          path: 'writing',
          name: 'writing',
          component: require('@/pages/Writing').default
        }, {
          path: 'paint',
          name: 'paint',
          component: require('@/pages/Paint').default
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
