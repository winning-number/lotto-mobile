import {
  IonicVue,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonLabel,
  IonItem,
  IonContent,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonText,
  IonCardSubtitle,
  IonCol,
  IonRow,
  IonGrid,
  IonCardHeader,
  IonCard,
  IonList,
  IonButton,
  IonCardContent,
  IonPage,
  IonModal,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonCheckbox,
  IonItemGroup,
  IonInput,
  IonSelectOption,
  IonSelect,
  IonSpinner,
  IonToggle,
  IonFooter,
} from '@ionic/vue';
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from '@/store';
import router, { RouteNames } from '@/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { ModuleIdentifier } from '@/store';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/components.css';
import './theme/font.scss';
import './theme/global.scss'

(async () => {
  console.log('Initializing app');
  await SplashScreen.show();
})();

console.log('Initializing app');
const app = createApp(App)
  .use(IonicVue)
  .use(store, key)
  .use(router);

app.component('ion-icon', IonIcon);
app.component('ion-title', IonTitle);
app.component('ion-toolbar', IonToolbar);
app.component('ion-header', IonHeader);
app.component('ion-label', IonLabel);
app.component('ion-item', IonItem);
app.component('ion-content', IonContent);
app.component('ion-menu', IonMenu);
app.component('ion-menu-button', IonMenuButton);
app.component('ion-buttons', IonButtons);
app.component('ion-text', IonText);
app.component('ion-card-subtitle', IonCardSubtitle);
app.component('ion-col', IonCol);
app.component('ion-row', IonRow);
app.component('ion-grid', IonGrid);
app.component('ion-card-header', IonCardHeader);
app.component('ion-card', IonCard);
app.component('ion-list', IonList);
app.component('ion-button', IonButton);
app.component('ion-card-content', IonCardContent);
app.component('ion-page', IonPage);
app.component('ion-modal', IonModal);
app.component('ion-tabs', IonTabs);
app.component('ion-tab-bar', IonTabBar);
app.component('ion-tab-button', IonTabButton);
app.component('ion-checkbox', IonCheckbox);
app.component('ion-item-group', IonItemGroup);
app.component('ion-input', IonInput);
app.component('ion-select-option', IonSelectOption);
app.component('ion-select', IonSelect);
app.component('ion-spinner', IonSpinner);
app.component('ion-toggle', IonToggle);
app.component('ion-footer', IonFooter);


router.isReady().then(() => {
  store.dispatch(ModuleIdentifier.INITIALIZE).then(async () => {
      // Cache le splash screen lorsque les données sont chargées
      SplashScreen.hide();
      await router.push({ path: RouteNames.DEFAULT });
      app.mount('#app');
  }).catch(async (err) => {
      // Cache le splash screen en cas d'erreur
      console.log("unables to initialize application" + err);
      SplashScreen.hide();
      await router.push({ path: RouteNames.OUT_OF_SERVICE });
      app.mount('#app');
  });
});
