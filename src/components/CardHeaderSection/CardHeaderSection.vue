<template>
  <div class="chs_wrapper_label">
    <img :alt="this.altImage" :src="this.srcImage" />
    <ion-label class="ion-text-center chs_label_overlay" :class="this.getClassLabelColor">
      {{ this.overlayImageText }}
    </ion-label>
  </div>
  <ShowNumber v-if="this.drawsOutHeader !== undefined && this.drawsOutHeader == true && this.showNumbers" class="my-separator"
    :ball1="this.draws.ball1"
    :ball2="this.draws.ball2"
    :ball3="this.draws.ball3"
    :ball4="this.draws.ball4"
    :ball5="this.draws.ball5"
    :luckyBall="this.draws.luckyBall" />
  <ion-card-header>
    <ion-grid v-if="this.subTitle !== undefined && this.subTitle !== ''" class="ion-no-padding">
      <ion-row class="ion-align-items-center">
        <ion-col size="12">
          <ion-card-subtitle
            v-if="this.cardType === 'notice'"
            class="ion-text-start ion-no-padding"
            style="font-weight: bold"
          >
            <ion-label  class="ion-text-start">{{ this.subTitle }}</ion-label>
          </ion-card-subtitle>
          <ion-card-subtitle
            v-else
            class="ion-text-end ion-no-padding chs_vertical_align_icon"
            color="warning"
            style="font-weight: bold"
            >
              {{ this.subTitle }}
              <ion-icon color="warning" :icon="chevronForwardOutline"></ion-icon>
          </ion-card-subtitle>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ShowNumber v-if="this.drawsOutHeader !== undefined && this.drawsOutHeader == false && this.showNumbers"
      :ball1="this.draws.ball1"
      :ball2="this.draws.ball2"
      :ball3="this.draws.ball3"
      :ball4="this.draws.ball4"
      :ball5="this.draws.ball5"
      :luckyBall="this.draws.luckyBall" />
  </ion-card-header>
</template>

<script src="./CardHeaderSection.ts"></script>
<style src="./CardHeaderSection.scss" lang="scss"></style>