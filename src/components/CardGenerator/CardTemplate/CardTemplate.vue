<template>
  <ion-card>
    <img :alt="altImage" :src="srcImage" />
    <ShowNumber class="my-separator" v-if="showNumbers"
    :ball1="draws.ball1"
    :ball2="draws.ball2"
    :ball3="draws.ball3"
    :ball4="draws.ball4"
    :ball5="draws.ball5"
    :luckyBall =  "draws.luckyBall"/>
    <ion-card-header>
      <ion-grid class="ion-no-padding">
        <ion-row class="ion-align-items-center">
          <ion-col size="10">
            <ion-card-subtitle style="font-weight: bold">{{ title }}</ion-card-subtitle>
          </ion-col>
          <ion-col size="2">
            <ion-button class="ion-float-end" size=small fill=clear :disabled="this.loading" @click="this.openSettings()">
              <ion-icon color="secondary" :icon="settingsSharp"></ion-icon>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-header>
    <ion-card-content>
      <ion-text style="font-size: small;">{{ description }}</ion-text>
      <ion-button class="ion-margin-top" expand="block" fill="solid" :disabled="this.loading" @click="this.generateNumber()">
        <ion-spinner v-if="this.loading" name="bubbles"></ion-spinner>
        <ion-text v-else>Generate</ion-text>
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script src="./CardTemplate.ts"></script>