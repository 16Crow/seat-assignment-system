import { createRouter, createWebHistory} from 'vue-router';

export default function () {
  const routerHistory = createWebHistory()

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
      },
    ]
  });
}