<template>
  <ion-app>
    <AppMenu v-if="route.path != '/breaked'"
      menuId="main-menu"
      contentId="main-content"
    />
    <ion-router-outlet animated="true" id="main-content"></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import AppMenu from '@/components/AppMenu/AppMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    AppMenu,
  },
  setup() {
    const route = useRoute();
 
    return {
      route: route,
    };
  },
});
</script>