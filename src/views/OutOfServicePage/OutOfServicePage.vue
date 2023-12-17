<template>
  <ion-page>
    <ion-content fullscreen="true">
      <div style="
        position: absolute;
        top: 30%;
        left: 25%;
        width: 50%;
        height: 50%;
      ">
      <ion-row class="ion-justify-content-center">
        <img alt="logo" height="80" src="@/assets/logo6.png">
      </ion-row>
      <ion-row style="height: 40px;"></ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-label class="hp_title" style="font-size: xx-large;">
          Loto Gagnant
        </ion-label>
      </ion-row>
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar class="ion-padding">
        <ion-row class="ion-justify-content-center">
          <ion-label color="secondary">
            {{ this.data.message }}
          </ion-label>
        </ion-row>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script src="./OutOfServicePage.ts"></script>
