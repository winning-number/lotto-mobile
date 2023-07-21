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
          No inspiration ? Tell us what brings you luck and we will generate your lucky numbers.
        </ion-text>
        <ion-item-group>
          <ion-item>
            <ion-label>Use a different lucky charm for each balls ?</ion-label>
            <ion-checkbox v-model="multiInputs"></ion-checkbox>
          </ion-item>
        </ion-item-group>
        <ion-item-group v-if="multiInputs == false">
          <ion-item>
            <ion-label>lucky charm: </ion-label>
            <ion-input v-model="filter.ball1Input"></ion-input>
          </ion-item>
        </ion-item-group>
        <ion-item-group v-else>
          <ion-list>
            <ion-item>
              <ion-label>lucky charm for Ball1: </ion-label>
              <ion-input v-model="filter.ball1Input"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>lucky charm for Ball2: </ion-label>
              <ion-input v-model="filter.ball2Input"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>lucky charm for Ball3: </ion-label>
              <ion-input v-model="filter.ball3Input"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>lucky charm for Ball4: </ion-label>
              <ion-input v-model="filter.ball4Input"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>lucky charm for Ball5: </ion-label>
              <ion-input v-model="filter.ball5Input"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>lucky charm for Ball lucky: </ion-label>
              <ion-input v-model="filter.luckyInput"></ion-input>
            </ion-item>
          </ion-list>
        </ion-item-group>
      </v-form>
    </ion-content>
  </ion-modal>
</template>

<script src="./LuckyRenderer.ts"></script>