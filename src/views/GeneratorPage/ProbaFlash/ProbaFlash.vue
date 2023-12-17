<template>
  <ion-page>
    <ion-header fullscreen="true">
      <GeneratorCard
        @generateDraw="this.generate"
        :srcImage="this.cardProps.srcImage"
        :title="this.cardProps.title"
        :description="this.cardProps.description"
        :buttonMessage="this.cardProps.buttonMessage"
        :showLoaderButton="this.cardProps.showLoaderButton"
        :draws="this.cardProps.draws"
      />
    </ion-header>
    <ion-content class="ion-padding">
      <ion-row class="my-spacer"></ion-row>
      <ion-text color="medium">{{ this.data.explainUsage }}</ion-text>
      <ion-row class="my-spacer"></ion-row>
      <ion-row class="my-spacer"></ion-row>
      <ion-item-group>
        <ion-item lines="none">
          <ion-title slot=start color="medium ion-no-padding" class="">{{ this.data.titleConfiguration }}</ion-title>
          <ConfigButton
            @saveState="this.saveConfiguration"
            @restoreDefaultState="this.resetConfiguration"
            @cancelState="this.undoConfiguration"
            :id="this.configProps.id"
            :state="this.configProps.state"
            :signal="this.configProps.signal"
          />
        </ion-item>
        <ion-item>
          <ion-select
            v-model="this.config.days"
            multiple
            justify="space-between"
            label-placement="stacked"
            :label="this.data.labelDays"
          >
            <ion-select-option
              v-for="(day, index) in this.DayApp"
              :key="index + '-day'"
              :value="day"
            >
              {{ day }}
            </ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-toggle
            v-model="this.config.classicLotto"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelClassicLotto }}</ion-text>
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle
            v-model="this.config.secondRoll"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelSecondDraw }}</ion-text>
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle
            v-model="this.config.superLotto"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelSuperLotto }}</ion-text>
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle
            v-model="this.config.grandLotto"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelLargeLotto }}</ion-text>
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle
            v-model="this.config.xmaxLotto"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelChristmasLotto }}</ion-text>
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle
            v-model="this.config.oldLotto"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelOldLotto }}</ion-text>
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-toggle
            v-model="this.config.ascendingOrder"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelOrder }}</ion-text>
          </ion-toggle>
        </ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script src="./ProbaFlash.ts"></script>