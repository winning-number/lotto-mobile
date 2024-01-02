<template>
  <ion-list lines="none">
    <ion-grid class="ion-no-padding ion-no-margin">
    <!-- set header -->
      <ion-item class="ion-align-items-center ion-justify-content-between"
      >
        <ion-col size="2" class="ion-text-start ion-text-justify">
          <ion-label color="warning" class="ion-text-wrap">Bon N°</ion-label>
        </ion-col>
        <ion-col size="1"></ion-col>
        <ion-col size="4" class="ion-no-padding ion-text-start">
          <ion-label color="warning">Grilles gagnantes</ion-label>
        </ion-col>
        <ion-col size="5" class="ion-no-padding ion-text-end">
          <ion-label color="warning">Gains par grille</ion-label>
        </ion-col>
      </ion-item>
      <!-- set content by rank -->
      <ion-item class="ion-align-items-center ion-justify-content-between"
        style="height: auto; font-size: 10;"
        v-for="(report, index) in reportWinners"
        :key="index + '-report'"
        :value="index"
        :color="index % 2 === 0 ? 'light' : ''"
      >
        <ion-col size="2" class="ion-text-start ion-text-justify">
          <!-- set condition to win this rank -->
          <div v-for="(conditionner, indexConditionner) in report.condition"
            :key="conditionner + '-' + indexConditionner"
            style="display: flex; align-items: center; justify-content: flex-start;"
          >
            <ion-text style="width: 2em;" class="ion-text-wrap ion-text-center">{{ conditionner.number }}</ion-text>
            <div style="width: 2em;">
              <div
                :style="{width: '1em', height: '1em', backgroundColor: conditionner.color, borderRadius: '50%' }"
              ></div>
            </div>
          </div>
        </ion-col>
        <ion-col size="1"></ion-col>
        <ion-col size="4" class="ion-no-padding ion-text-start">
          <ion-label>{{ report.nbWinner }}</ion-label>
        </ion-col>
        <ion-col size="5" class="ion-no-padding ion-text-end">
          <ion-label>{{ report.RateWin }}</ion-label>
        </ion-col>
      </ion-item>
    </ion-grid>
  </ion-list>
</template>


<script src="./WinnerBoardFirstRoll.ts"></script>