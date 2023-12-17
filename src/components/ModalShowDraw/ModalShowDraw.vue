<template>
  <ion-modal is-open="true">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-button color="secondary" arial-label="back" @click="this.closeModal()">
              <ion-icon class="ion-padding-end" :icon="chevronBackOutline" aria-hidden="true"></ion-icon>
              <ion-label>Retour</ion-label>
            </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card :disabled="false">
        <CardHeaderSection
          :headerTitle="this.cardProps.headerTitle"
          :headerText="this.cardProps.headerText"
          :subTitle="this.cardProps.subTitle"
          :type="this.cardProps.type"
          :style="this.cardProps.style"
          :draws="this.cardProps.draws"
          :drawsOutHeader="this.cardProps.drawsOutHeader"
        />
        <ion-card-content>
          <ion-list lines="full">
            <ion-grid class="ion-no-padding ion-no-margin">
              <ion-row color="warning" class="ion-no-padding ion-align-items-center ion-justify-content-between my-separator"
                style="height: 40px; font-size: 10;"
                v-for="(report, index) in reportWinners"
                :key="index + '-report'"
                :value="index"
              >
                <ion-col size="4" class="ion-text-start ion-text-justify">
                  <ion-label class="ion-text-wrap">{{ report.title }}</ion-label>
                </ion-col>
                <ion-col size="3" class="ion-no-padding ion-text-center">
                  <ion-label>{{ report.nbWinner }}</ion-label>
                </ion-col>
                <ion-col size="5" class="ion-no-padding ion-text-end">
                  <ion-label>{{ report.RateWin }}</ion-label>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-list>
          <ion-grid class="ion-no-padding">
            <ion-row class="ion-align-items-center">
              <ion-col size="12">
                <ion-card-subtitle class="ion-text-end ion-no-padding" style="font-weight: bold">
                  <!--second draw -->
                  <!-- joker plus -->
                  <!-- win codes -->
                </ion-card-subtitle>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-modal>
</template>

<script src="./ModalShowDraw.ts"></script>