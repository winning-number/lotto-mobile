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
          Use the probabilities to get your draw. You can filter several elements to refine your result.
          Filters are used to obtain a base of draws to apply the probability algorithms.
        </ion-text>
        <ion-item-group>
          <ion-item>
            <ion-label>Select draws base by day</ion-label>
            <ion-select v-model="selectedDay">
              <ion-select-option
                v-for="(day, index) in days"
                :key="index"
                :value="day"
              >{{ day }}
              </ion-select-option>
            </ion-select>
          </ion-item>
        </ion-item-group>
        <ion-item-group>
          <ion-list>
            <ion-item>
              <ion-label>Use the new loto</ion-label>
              <ion-checkbox v-model="filter.classicLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>Use the second roll:</ion-label>
              <ion-checkbox v-model="filter.secondRoll"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>Use the "super loto":</ion-label>
              <ion-checkbox v-model="filter.superLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>Use the "grand loto":</ion-label>
              <ion-checkbox v-model="filter.grandLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>Use the "xmas loto":</ion-label>
              <ion-checkbox v-model="filter.xmaxLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>Use the old loto (before 2008):</ion-label>
              <ion-checkbox v-model="filter.oldLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>Search with the most often drawn numbers</ion-label>
              <ion-checkbox v-model="filter.ascendingOrder"></ion-checkbox>
            </ion-item>
          </ion-list>
        </ion-item-group>
      </v-form>
    </ion-content>
  </ion-modal>
</template>

<script src="./ProbaRenderer.ts"></script>