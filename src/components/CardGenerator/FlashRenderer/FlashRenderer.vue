<template>
  <CardTemplate
    @generateNumber=this.generate()
    @openSettings=this.openSettings()
    :altImage=this.data.altImage
    :srcImage=this.data.srcImage
    :title=this.data.title
    :description=this.data.description
    :loading=this.data.loading
    :draws=this.data.draws
  />
  <ion-modal :is-open=this.data.openModal>
    <ModalHeader
      @cancel="this.cancel()"
      @confirm="this.confirm()"
    />
    <ion-content class="ion-padding">
      <ion-title class="ion-text-center">Settings</ion-title>
      <ion-row class="my-spacer"></ion-row>
      <v-form>
        <ion-text>
          Better than a flash ? The smart Flash ! Maybe you don't want a flash to show you yesterday's winning numbers ?
        </ion-text>
        <ion-item-group>
          <ion-item>
            <ion-label>Exlcude the past's winning number</ion-label>
            <ion-checkbox v-model="filter.excludeAlreadyPicked"></ion-checkbox>
          </ion-item>
          <ion-item>
          <ion-label>
            Exclude some numbers for the draw ball ? (lucky ball not concerned)
          </ion-label>
            <ion-select multiple @ionChange="onBallSelectionChange($event.target.value)" v-model="filter.excludeBallNumber">
              <ion-select-option
                v-for="n in maxBallNumber"
                :key="n"
                :value="n"
              >{{ n }}</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label>Exclude some numbers for the lucky ball ?</ion-label>
            <ion-select multiple @ionChange="onLuckySelectionChange($event.target.value)" v-model="filter.excludeLuckyNumber">
              <ion-select-option
                v-for="n in maxLuckyNumber"
                :key="n"
                :value="n"
              >{{ n }}</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-item-group>
      </v-form>
    </ion-content>
  </ion-modal>
</template>

<script src="./FlashRenderer.ts"></script>