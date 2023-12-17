import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage/HomePage.vue'

export const RouteNames = {
  DEFAULT: "/",
  HOME: "/home",
  GENERATOR_DEFAULT: "",
  GENERATOR: "/generator/",
  GENERATOR_SMART: "smart",
  GENERATOR_LUCKY: "lucky",
  GENERATOR_PROBA: "proba",
  ABOUT_US: "/aboutus",
  OUT_OF_SERVICE: "/out-of-service",
}

const routes: Array<RouteRecordRaw> = [
  {
    path: RouteNames.DEFAULT,
    redirect: RouteNames.HOME,
  },
  {
    path: RouteNames.HOME,
    component: HomePage,
  },
  {
    path: RouteNames.GENERATOR,
    component: () => import('@/views/GeneratorPage/GeneratorPage.vue'),
    children: [
      {
        path: RouteNames.GENERATOR_DEFAULT,
        redirect: RouteNames.GENERATOR + RouteNames.GENERATOR_SMART,
      },
      {
        path: RouteNames.GENERATOR_SMART,
        component: () => import('@/views/GeneratorPage/SmartFlash/SmartFlash.vue'),
      },
      {
        path: RouteNames.GENERATOR_LUCKY,
        component: () => import('@/views/GeneratorPage/LuckyFlash/LuckyFlash.vue'),
      },
      {
        path: RouteNames.GENERATOR_PROBA,
        component: () => import('@/views/GeneratorPage/ProbaFlash/ProbaFlash.vue'),
      },
    ]
  },
  {
    path: RouteNames.ABOUT_US,
    component: () => import('@/views/AboutUs/AboutUs.vue'),
  },
  {
    path: RouteNames.OUT_OF_SERVICE,
    component: () => import('@/views/OutOfServicePage/OutOfServicePage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
