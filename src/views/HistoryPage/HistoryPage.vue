<template>
  <ion-page>
    <AppToolbar />
    <ion-content fullscreen="true">
      <ModalShowDraw v-if="this.data.showLastDrawDetails"
        :draw="this.data.detailDraw"
        @closeCallback="this.closeModalShowLastDraw()"
      />
      <ion-list>
        <ion-item v-for="(resumeDraw) in this.history" :key="resumeDraw.identifier">
          <ion-grid>
              <ion-item lines="none" class="ion-no-padding" style="--inner-padding-end: 0px;">
              <ion-title color="secondary" size="small" slot="start" class="ion-no-padding">{{ this.buildDatePhrase(
                resumeDraw.dayNumber,
                resumeDraw.day,
                resumeDraw.month,
                resumeDraw.year)
              }}</ion-title>
              <ion-button
                class="ion-no-padding"
                slot="end"
                fill="clear"
                color="secondary"
                size="small"
                @click="openModalShowLastDraw(resumeDraw.identifier)"
              >
                <ion-icon size="large" :icon="informationCircleOutline"></ion-icon>
              </ion-button>
            </ion-item>
            <ion-item lines="none" class="ion-no-padding" style="--inner-padding-end: 0px; --min-height: 0;">
              <ion-text color="warning" slot="start">Prix: </ion-text>
              <ion-text color="warning" slot="end">{{ this.buildPricePhrase(resumeDraw.rateToWin) }}</ion-text>
            </ion-item>
            <ion-item lines="none" class="ion-no-padding" style="--inner-padding-end: 0px; --min-height: 0;">
              <ion-text color="warning" slot="start">Remporté: </ion-text>
              <ion-text color="warning" slot="end">{{ drawIsWin(resumeDraw) }}</ion-text>
            </ion-item>
            <ion-item lines="none" class="ion-no-padding" style="--inner-padding-end: 0px; --min-height: 0;">
              <ion-text color="warning" slot="start">Loto type: </ion-text>
              <ion-text color="warning" slot="end">{{ this.buildLottoTypePhrase(resumeDraw.type) }}</ion-text>
            </ion-item>
            <ion-row>
              <ShowNumber
                :ball1="resumeDraw.ball1"
                :ball2="resumeDraw.ball2"
                :ball3="resumeDraw.ball3"
                :ball4="resumeDraw.ball4"
                :ball5="resumeDraw.ball5"
                :luckyBall="resumeDraw.lucky"
              />
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
      <ion-infinite-scroll @ionInfinite="infiniteScroll">
        <ion-infinite-scroll-content
          loading-text="Chargement de l'historique plus ancien..."
          loading-spinner="bubbles"
        ></ion-infinite-scroll-content>
      </ion-infinite-scroll>
      <ion-item v-if="this.data.showLoadingStatus"
        lines="none"
        color="secondary"
        style="position: fixed; right: -5px; bottom: -5px; min-width: calc(100% + 5px);"
      >
        chargement de l'historique {{ this.data.loadedItems }} / {{ this.data.maxItems }}
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script src="./HistoryPage.ts"></script>