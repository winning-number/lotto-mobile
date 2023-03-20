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
          No settings available.
        </ion-text>
      </v-form>
    </ion-content>
  </ion-modal>
</template>

<script src="./FlashRenderer.ts"></script>