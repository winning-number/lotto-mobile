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
        <ion-card-content class="ion-no-padding">
          <ion-accordion-group class="ion-no-padding">
            <ion-accordion value="BoardFirstRoll" class="ion-no-padding">
              <ion-item slot="header" color="light">
                <ion-label>Tableau des gains</ion-label>
              </ion-item>
              <div slot="content">
                <WinnerBoardFirstRoll
                  :draw="this.draw"
                />
              </div>
            </ion-accordion>
          </ion-accordion-group>
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
      <ion-card v-if="hasSecondRoll()">
        <ion-card-header>
          <ion-card-subtitle class="ion-text-start ion-no-padding" style="font-weight: bold">
            Option second tirage
          </ion-card-subtitle>
          <ShowSecondRoll
            :ball1="this.draw.ball1SecondDraw"
            :ball2="this.draw.ball2SecondDraw"
            :ball3="this.draw.ball3SecondDraw"
            :ball4="this.draw.ball4SecondDraw"
            :ball5="this.draw.ball5SecondDraw"
          />
        </ion-card-header>
        <ion-card-content class="ion-no-padding">
          <ion-accordion-group class="ion-no-padding">
            <ion-accordion value="BoardSecondRoll" class="ion-no-padding">
              <ion-item slot="header" color="light">
                <ion-label>Tableau des gains</ion-label>
              </ion-item>
              <div slot="content">
                <WinnerBoardSecondRoll
                  :draw="this.draw"
                />
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle class="ion-text-start ion-no-padding" style="font-weight: bold">
            Codes loto
          </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content class="ion-no-padding">
          <ion-row class="ion-padding ion-align-items-center">
              <ion-text color="secondary">Joker+</ion-text>
              <ion-button
                disabled
                fill="outline"
                color="secondary"
                size="small"
                shape="round"
              >{{ this.draw.jokerPlus }}</ion-button>
          </ion-row>
          <ion-accordion-group class="ion-no-padding">
            <ion-accordion value="BoardSecondRoll" class="ion-no-padding">
              <ion-item slot="header" color="light">
                <ion-label>{{ buildWinCodesPhrase(this.draw.winnerCodes, this.draw.rateCode) }}</ion-label>
              </ion-item>
              <div slot="content" class="ion-padding">
                <ion-button
                  v-for="(code, index) in this.draw.winnerCodes"
                  :key="index + '-wincode'"
                  disabled
                  fill="outline"
                  color="secondary"
                  size="small"
                  shape="round"
                >{{ code }}</ion-button>
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-modal>
</template>

<script src="./ModalShowDraw.ts"></script>