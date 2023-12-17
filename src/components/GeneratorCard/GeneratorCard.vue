<template>
<!--  <ion-card>-->
    <img :alt="this.altImage" :src="this.srcImage" />
    <ShowNumber class="ion-padding-end ion-padding-start" v-if="showNumbers"
    :ball1="this.draws.ball1"
    :ball2="this.draws.ball2"
    :ball3="this.draws.ball3"
    :ball4="this.draws.ball4"
    :ball5="this.draws.ball5"
    :luckyBall = "this.draws.luckyBall"/>
    <ion-card-header>
      <ion-grid class="ion-no-padding">
        <ion-row class="ion-align-items-center">
          <ion-col size="12">
            <ion-card-subtitle style="font-weight: bold">{{ this.title }}</ion-card-subtitle>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-header>
    <ion-card-content>
      <ion-text style="font-size: small;">{{ this.description }}</ion-text>
      <ion-button class="ion-margin-top" expand="block" fill="solid" :disabled="this.showLoaderButton" @click="this.generateNumber()">
        <ion-spinner v-if="this.showLoaderButton" name="bubbles"></ion-spinner>
        <ion-text v-else>{{ this.buttonMessage }}</ion-text>
      </ion-button>
    </ion-card-content>
  <!--</ion-card>-->
</template>

<script src="./GeneratorCard.ts"></script>