<template>
  <ion-page tab="smart">
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
          <ion-title slot=start color="medium" class="ion-no-padding">{{ this.data.titleConfiguration }}</ion-title>
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
          <ion-toggle
            v-model="this.config.excludeAlreadyPicked"
            justify="space-between"
            color="secondary"
          >
            <ion-text color="secondary" class="ion-text-wrap">{{ this.data.labelExcludeWinningNumbers }}</ion-text>
          </ion-toggle>
        </ion-item>
        <ion-item>
          <ion-select
            multiple
            v-model="this.config.excludeBallNumber"
            class="ion-text-wrap"
            label-placement="stacked"
          >
            <ion-select-option
              v-for="n in this.RulesApp.BALL_MAX_VALUE"
              :key="n + '-ball'"
              :value="n"
            >
              {{ n }}
            </ion-select-option>
            <ion-label slot="label" color="secondary">{{ this.data.labelExcludeBallNumbers }}</ion-label>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-select
            multiple
            v-model="this.config.excludeLuckyNumber"
            class="ion-text-wrap"
            label-placement="stacked"
          >
            <ion-select-option
              v-for="n in this.RulesApp.LUCKYBALL_MAX_VALUE"
              :key="n + '-lucky'"
              :value="n"
            >
              {{ n }}
            </ion-select-option>
            <ion-label slot="label" color="secondary">{{ this.data.labelExcludeChanceNumbers }}</ion-label>
          </ion-select>
        </ion-item>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script src="./SmartFlash.ts"></script>