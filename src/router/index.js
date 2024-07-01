import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'goods',
      component: () => import('../views/GoodsListView.vue')
    },
    {
      path: '/log',
      name: 'logView',
      component: () => import('../views/LogView.vue')
    },
    {
      path: '/productCard/:id',
      name: 'productCard',
      props: true,
      component: () => import('../views/ProductCardView.vue')
    }
  ]
});

export default router;
