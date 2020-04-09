import { createRouter, createHistory } from '@posva/vue-router-next'
const routes = [
    {
        path: '/',
        name: '_home',
        component: Main,
        meta: {
          hideInMenu: true,
          notCache: true
        },
        children: [{
          path: '/home',
          name: 'home',
          meta: {
            hideInMenu: true,
            title: '首页',
            notCache: true,
            icon: '_menu_icon_'
          },
          component: () => import('_v/home')
        }]
    }
]
export default routes