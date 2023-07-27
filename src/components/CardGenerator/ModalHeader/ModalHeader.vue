<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons>
        <ion-grid>
          <ion-row>
            <ion-col size="4">
              <ion-button color="dark" class="ion-float-start" :strong="true" @click="this.cancel">Annuler</ion-button>
            </ion-col>
            <ion-col size="4"></ion-col>
            <ion-col size="4">
              <ion-button color="warning" class="ion-float-end" :strong="true" @click="this.confirm">Enregistrer</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script src="./ModalHeader.ts"></script>