<template>
  <ion-page>
    <HeaderPage />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Random</ion-title>
        </ion-toolbar>
      </ion-header>
      <ShowNumbers v-if="showNumbers"
        :ball1="draw.ball1"
        :ball2="draw.ball2"
        :ball3="draw.ball3"
        :ball4="draw.ball4"
        :ball5="draw.ball5"
        :luckyBall =  "draw.luckyBall"/>
      <RandomExplorer title="My random numbers" />
    </ion-content>
  </ion-page>
</template>

<script src="./TabRandomExplorer.ts"></script>
