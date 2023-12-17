<template>
  <ion-page>
    <ion-tabs>
      <AppToolbar />
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button :tab="RouteNames.GENERATOR_SMART" @click="this.switchTab(RouteNames.GENERATOR_SMART)">
          <ion-icon :src="this.flashIcon" />
          <ion-label>Smart</ion-label>
        </ion-tab-button>

        <ion-tab-button button :tab="RouteNames.GENERATOR_LUCKY" @click="this.switchTab(RouteNames.GENERATOR_LUCKY)">
          <ion-icon :src="this.luckyIcon" />
          <ion-label>Lucky</ion-label>
        </ion-tab-button>

        <ion-tab-button button :tab="RouteNames.GENERATOR_PROBA" @click="this.switchTab(RouteNames.GENERATOR_PROBA)">
          <ion-icon :src="this.probaIcon" />
          <ion-label>Proba</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script src="./GeneratorPage.ts"></script>