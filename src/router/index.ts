import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage/HomePage.vue'
import GeneratorPage from '@/views/GeneratorPage/GeneratorPage.vue'
import GeneratorSmart from '@/views/GeneratorPage/SmartFlash/SmartFlash.vue'
import GeneratorLucky from '@/views/GeneratorPage/LuckyFlash/LuckyFlash.vue'
import GeneratorProba from '@/views/GeneratorPage/ProbaFlash/ProbaFlash.vue'

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
    component: GeneratorPage,
    children: [
      {
        path: RouteNames.GENERATOR_DEFAULT,
        redirect: RouteNames.GENERATOR + RouteNames.GENERATOR_SMART,
      },
      {
        path: RouteNames.GENERATOR_SMART,
        name: RouteNames.GENERATOR_SMART,
        component: GeneratorSmart,
      },
      {
        path: RouteNames.GENERATOR_LUCKY,
        name: RouteNames.GENERATOR_LUCKY,
        component: GeneratorLucky,
      },
      {
        path: RouteNames.GENERATOR_PROBA,
        name: RouteNames.GENERATOR_PROBA,
        component: GeneratorProba,
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
  history: createWebHistory("/"),
  routes
})

export default router
