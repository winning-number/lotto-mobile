<template>
  <ion-page>
    <ion-tabs>
      <AppToolbar />
      <ion-router-outlet animated="true"></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="smart" href="smart">
          <ion-icon :src="this.flashIcon" :color="getTabColor('smart')" />
          <ion-label :color="getTabColor('smart')">Smart</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="lucky" href="lucky">
          <ion-icon :src="this.luckyIcon" :color="getTabColor('lucky')"/>
          <ion-label :color="getTabColor('lucky')">Lucky</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="proba" href="proba">
          <ion-icon :src="this.probaIcon" :color="getTabColor('proba')"/>
          <ion-label :color="getTabColor('proba')">Proba</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script src="./GeneratorPage.ts"></script>