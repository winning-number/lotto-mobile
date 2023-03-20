<template>
  <!-- Menu description -->
  <ion-menu content-id="menu">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item href="#">
        <ion-label>Draws</ion-label>
      </ion-item>
      <ion-item href="#">
        <ion-label>Tickets</ion-label>
      </ion-item>
      <ion-item href="#">
        <ion-label>Statistics</ion-label>
      </ion-item>
      <ion-item href="/generator">
        <ion-label>Generator</ion-label>
      </ion-item>
      <ion-item href="#">
        <ion-label>Settings</ion-label>
      </ion-item>
      <ion-item href="#">
        <ion-label>About us</ion-label>
      </ion-item>
      <ion-item href="#">
        <ion-label>Share with your friends</ion-label>
      </ion-item>
    </ion-content>
  </ion-menu>
  <!-- Toolbar -->
  <ion-toolbar id="menu">
    <ion-grid class="ion-no-padding">
      <ion-row class="ion-align-items-center">
        <ion-col size="2">
          <ion-buttons class="ion-float-start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-col>
        <ion-col size="8">
          <ion-title>Winning Numbers !</ion-title>
        </ion-col>
        <ion-col size="2"></ion-col>
      </ion-row>
    </ion-grid>
  </ion-toolbar>
</template>

<script src="./HeaderPage.ts"></script>
