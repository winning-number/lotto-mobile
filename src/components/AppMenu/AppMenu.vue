<template>
  <ion-menu menu-id="main-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary" class="ion-padding-start ion-padding-end">
        <ion-icon button slot="start" :icon="gridOutline"></ion-icon>
        <ion-title slot="end">
          Menu
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item @click="this.nav(this.RouteNames.HOME)" button>
        <ion-label color="secondary">Accueil</ion-label>
      </ion-item>
      <ion-item @click="this.nav(this.RouteNames.GENERATOR)" button>
        <ion-label color="secondary">Générateur de tirages</ion-label>
      </ion-item>
      <ion-item @click="this.nav('#')" button disabled>
        <ion-label color="secondary">Mes tirages</ion-label>
      </ion-item>
      <ion-item @click="this.nav('#')" button disabled>
        <ion-label color="secondary">Historique du loto</ion-label>
      </ion-item>
      <ion-item @click="this.nav('#')" button disabled>
        <ion-label color="secondary">Statistiques</ion-label>
      </ion-item>
      <ion-item @click="this.nav('#')" button disabled>
        <ion-label color="secondary">Paramètres</ion-label>
      </ion-item>
      <ion-item @click="this.nav(RouteNames.ABOUT_US)" button router-direction="forward">
        <ion-label color="secondary">À propos de nous</ion-label>
      </ion-item>
      <ion-item button @click="this.Share()">
        <ion-label color="secondary">Partager l'appli ;)</ion-label>
      </ion-item>
    </ion-content>
  </ion-menu>
</template>

<script src="./AppMenu.ts"></script>