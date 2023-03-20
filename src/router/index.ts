import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import GenNumber from '@/views/GenNumber/GenNumber.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/generator'
  },
  {
    path: '/generator',
    component: GenNumber,
/* using format with the tab navigation   children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/GenNumber/GenNumber.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/TabLuckyExplorer.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/TabProbaExplorer.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/TabRandomExplorer.vue')
      },
    ]*/
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
