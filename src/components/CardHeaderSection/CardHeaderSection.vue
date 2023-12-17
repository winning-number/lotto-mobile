<template>
  <div class="chs_wrapper_label">
    <img :alt="this.view.altImage" :src="this.view.srcImage" />
    <ion-label class="ion-text-center chs_label_overlay" :class="this.view.shadowClass">
      <ion-title v-if="this.headerTitle !== ''" size="small">
        {{ this.headerTitle }}
      </ion-title>
      <ion-text v-if="this.headerText !== ''">
        {{ this.headerText }}
      </ion-text>
    </ion-label>
  </div>
  <ShowNumber v-if="this.draws !== undefined && this.drawsOutHeader == true" class="my-separator"
    :ball1="this.draws.ball1"
    :ball2="this.draws.ball2"
    :ball3="this.draws.ball3"
    :ball4="this.draws.ball4"
    :ball5="this.draws.ball5"
    :luckyBall="this.draws.luckyBall" />
  <ion-card-header>
    <ion-card-subtitle
      v-if="this.type === CardHeaderSectionType.NOTICE && this.subTitle != ''"
      class="ion-text-start ion-no-padding"
      style="font-weight: bold"
    >
      <ion-label class="ion-text-start">{{ this.subTitle }}</ion-label>
    </ion-card-subtitle>
    <ion-card-subtitle
      v-else-if="this.type === CardHeaderSectionType.BUTTON && this.subTitle != ''"
      class="ion-text-end ion-no-padding chs_vertical_align_icon"
      :color="this.view.color"
      style="font-weight: bold"
      >
        {{ this.subTitle }}
        <ion-icon :color="this.view.color" :icon="chevronForwardOutline"></ion-icon>
    </ion-card-subtitle>
    <ShowNumber v-if="this.draws !== undefined && this.drawsOutHeader == false"
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