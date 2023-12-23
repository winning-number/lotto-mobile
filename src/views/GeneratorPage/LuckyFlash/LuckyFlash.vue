<template>
  <ion-page tab="lucky">
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
          <ion-title slot=start color="medium ion-no-padding">{{ this.data.titleConfiguration }}</ion-title>
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
            v-model="this.config.multiInput"
            color="secondary"
            justify="space-between"
          >
            <ion-text color="secondary" class="ion-text-wrap">
              {{ this.data.labelExpertMode }}
            </ion-text>
          </ion-toggle>
        </ion-item>
        <div v-if="!this.config.multiInput">
          <ion-item lines="none">
            <ion-input
              color="secondary"
              class="ion-text-wrap"
              v-model="this.config.ball1Input"
              :placeholder="this.data.placeholderInput1"
              label-placement="stacked"
              counter="true"
              :maxlength="this.data.maxLengthInput"
              clear-input="true"
            >
              <ion-label slot="label" color="secondary">{{ this.data.labelInput }}</ion-label>
            </ion-input>
          </ion-item>
        </div>
        <div v-else>
          <ion-item lines="none">
            <ion-input
              color="secondary"
              class="ion-text-wrap"
              v-model="this.config.ball1Input"
              :placeholder="this.data.placeholderInput1"
              label-placement="stacked"
              :maxlength="this.data.maxLengthInput"
              clear-input="true"
              counter="true"
            >
              <ion-label slot="label" color="secondary">{{ this.data.labelMultiInput1 }}</ion-label>
            </ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-input
              color="secondary"
              class="ion-text-wrap"
              v-model="this.config.ball2Input"
              :placeholder="this.data.placeholderInput2"
              label-placement="stacked"
              counter="true"
              :maxlength="this.data.maxLengthInput"
              clear-input="true"
            >
              <ion-label slot="label" color="secondary">{{ this.data.labelMultiInput2 }}</ion-label>
            </ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-input
              color="secondary"
              class="ion-text-wrap"
              v-model="this.config.ball3Input"
              :placeholder="this.data.placeholderInput3"
              label-placement="stacked"
              counter="true"
              :maxlength="this.data.maxLengthInput"
              clear-input="true"
            >
              <ion-label slot="label" color="secondary">{{ this.data.labelMultiInput3 }}</ion-label>
            </ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-input
              color="secondary"
              class="ion-text-wrap"
              v-model="this.config.ball4Input"
              :placeholder="this.data.placeholderInput4"
              label-placement="stacked"
              counter="true"
              :maxlength="this.data.maxLengthInput"
              clear-input="true"
            >
              <ion-label slot="label" color="secondary">{{ this.data.labelMultiInput4 }}</ion-label>
            </ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-input
              color="secondary"
              class="ion-text-wrap"
              v-model="this.config.ball5Input"
              :placeholder="this.data.placeholderInput5"
              label-placement="stacked"
              counter="true"
              :maxlength="this.data.maxLengthInput"
              clear-input="true"
            >
              <ion-label slot="label" color="secondary">{{ this.data.labelMultiInput5 }}</ion-label>
            </ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-input
              color="secondary"
              class="ion-text-wrap"
              v-model="this.config.luckyInput"
              :placeholder="this.data.placeholderInputLucky"
              label-placement="stacked"
              counter="true"
              :maxlength="this.data.maxLengthInput"
              clear-input="true"
            >
              <ion-label slot="label" color="secondary">{{ this.data.labelMultiInputLucky }}</ion-label>
            </ion-input>
          </ion-item>
        </div>
      </ion-item-group>
    </ion-content>
  </ion-page>
</template>

<script src="./LuckyFlash.ts"></script>