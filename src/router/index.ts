import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/watch/:id',
      name: 'watch',
      component: import('../views/watch.vue'),
    },
    {
      path: '/watch-effect/:id',
      name: 'watch-effect',
      component: import('../views/watch-effect.vue'),
    },
  ],
});

export default router;
