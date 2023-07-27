<template>
  <!-- Menu description -->
  <ion-menu content-id="menu">
    <ion-header>
      <ion-toolbar color="primary" class="ion-padding-start ion-padding-end">
        <ion-icon slot="start" :icon="gridOutline"></ion-icon>
        <ion-title slot="end">
          Menu
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item href="/generator">
        <ion-label color="secondary">Accueil</ion-label>
      </ion-item>
      <ion-item href="/generator">
        <ion-label color="secondary">Générateur de tirages</ion-label>
      </ion-item>
      <ion-item disabled href="#">
        <ion-label color="secondary">Mes tirages</ion-label>
      </ion-item>
      <ion-item disabled href="#">
        <ion-label color="secondary">Historique du loto</ion-label>
      </ion-item>
      <ion-item disabled href="#">
        <ion-label color="secondary">Statistiques</ion-label>
      </ion-item>
      <ion-item disabled href="#">
        <ion-label color="secondary">Paramètres</ion-label>
      </ion-item>
      <ion-item href="/aboutus">
        <ion-label color="secondary">À propos de nous</ion-label>
      </ion-item>
      <ion-item button @click="this.Share()">
        <ion-label color="secondary">Partager l'appli ;)</ion-label>
      </ion-item>
    </ion-content>
  </ion-menu>
  <!-- Toolbar -->
  <ion-header>
  <ion-toolbar id="menu" class="ion-padding-end">
    <!--<img slot="end" alt="logo" height="60" src="@/assets/loto-gagnant-logo.png">-->
    <ion-buttons slot="start" class="ion-float-start">
      <ion-menu-button color="secondary">
      </ion-menu-button>
    </ion-buttons>
    <ion-title slot="end" class="hp_title">Loto Gagnant</ion-title>
      <img slot="end" alt="logo" height="40" src="@/assets/logo6.png">

<!--
    <ion-grid class="ion-no-padding">
      <ion-row class="ion-align-items-center">
        <ion-col size="2">
          <ion-buttons class="ion-float-start">
            <ion-menu-button>
            </ion-menu-button>
          </ion-buttons>
        </ion-col>
        <ion-col size="8">
          <ion-title>Loto Gagnant !</ion-title>
        </ion-col>
        <ion-col size="2"></ion-col>
      </ion-row>
    </ion-grid>-->
  </ion-toolbar>
  </ion-header>
</template>

<script src="./HeaderPage.ts"></script>
<style src="./HeaderPage.scss" lang="scss"></style>
