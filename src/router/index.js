import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'logView' }
    },
    {
      path: '/log',
      name: 'logView',
      component: () => import('../views/LogView.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/GoodsListView.vue')
    }
  ]
});

export default router;
