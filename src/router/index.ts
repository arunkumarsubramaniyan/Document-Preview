import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
          {
            path: '/',
            name: 'login_index',
            component: () => import('../views/login/login.vue')
          },
          {
            path: '/main',
            name: 'main',
            component: () => import('../views/dashboard/main.vue'),
            children:[
              { path:'/home',  component: () => import('../views/dashboard/dashboard.vue'), }
            ]
          }
    ],
  })

  
export default router