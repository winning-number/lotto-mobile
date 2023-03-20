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
          Use probabilities to get the numbers depends on your selected filters.
        </ion-text>
        <ion-item-group>
          <ion-item>
            <ion-label>select the the draws for the specifics day</ion-label>
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
              <ion-label>with second roll:</ion-label>
              <ion-checkbox v-model="filter.secondRoll"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>with "super" lotto:</ion-label>
              <ion-checkbox v-model="filter.superLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>with "grand" lotto:</ion-label>
              <ion-checkbox v-model="filter.grandLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>with "xmax" lotto:</ion-label>
              <ion-checkbox v-model="filter.xmaxLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>with "classical" lotto</ion-label>
              <ion-checkbox v-model="filter.classicLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>with "old" lotto (before 2008):</ion-label>
              <ion-checkbox v-model="filter.oldLotto"></ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-label>use the least picked ball:</ion-label>
              <ion-checkbox v-model="filter.ascendingOrder"></ion-checkbox>
            </ion-item>
          </ion-list>
        </ion-item-group>
      </v-form>
    </ion-content>
  </ion-modal>
</template>

<script src="./ProbaRenderer.ts"></script>