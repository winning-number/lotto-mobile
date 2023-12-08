<template>
  <ion-page>
    <HeaderPage />
    <ion-content :fullscreen="true">
      <ion-card :disabled="false" button href="/generator">
        <CardHeaderSection
          :srcImage="this.nextDraw.srcImage"
          :altImage="this.nextDraw.altImage"
          :overlayImageText="this.nextDraw.overlayImageText"
          :shadowColorOverlay="this.nextDraw.shadowColorOverlay"
          :subTitle="this.nextDraw.subTitle"
          :cardType="this.nextDraw.cardType"
        />
      </ion-card>
      <ion-card :disabled="true">
        <CardHeaderSection
          :srcImage="this.appStats.srcImage"
          :altImage="this.appStats.altImage"
          :overlayImageText="this.appStats.overlayImageText"
          :shadowColorOverlay="this.appStats.shadowColorOverlay"
          :subTitle="this.appStats.subTitle"
          :cardType="this.appStats.cardType"
        />
      </ion-card>
      <ion-card :disabled="false">
        <CardHeaderSection
          :srcImage="this.lastDraw.srcImage"
          :altImage="this.lastDraw.altImage"
          :overlayImageText="this.lastDraw.overlayImageText"
          :shadowColorOverlay="this.lastDraw.shadowColorOverlay"
          :subTitle="this.lastDraw.subTitle"
          :cardType="this.lastDraw.cardType"
          :drawsOutHeader="this.lastDraw.drawsOutHeader"
          :draws="this.lastDraw.draws"
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
                <ion-col size="4" class="ion-no-padding ion-text-start ion-text-justify">
                  <ion-label class="text-wrap">{{ report.title }}</ion-label>
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
                  <ion-button color="primary" size="small" fill="clear" style="font-weight: bold">
                    <ion-label>Plus de details</ion-label>
                    <ion-icon slot="end" color="primary" :icon="chevronForwardOutline"></ion-icon>
                  </ion-button>
                </ion-card-subtitle>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script src="./HomePage.ts"></script>
