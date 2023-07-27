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
    :id=this.data.tag
  />
  <ion-modal :is-open=this.data.openModal>
    <ModalHeader
      @cancel="this.cancel()"
      @confirm="this.confirm()"
    />
    <ion-content class="ion-padding">
      <ion-row class="my-spacer"></ion-row>
      <ion-title color="medium" class="ion-text-center">Configuration</ion-title>
      <ion-row class="my-spacer"></ion-row>
      <ion-text color="medium">
        Ecris une date de naissance, un prénom, une ville, le nom de ton équipe de sport préféré, un chiffre porte bonheur...
        Tu peux aussi définir un porte bonheur pour chaque numéro du tirage en cochant la case "Utiliser un porte bonheur différent pour chaque boule".
      </ion-text>
      <ion-row class="my-spacer"></ion-row>
      <ion-item-group>
        <ion-item>
          <ion-text color="secondary">Utiliser un porte bonheur différent pour chaque boule</ion-text>
          <ion-checkbox v-model="multiInputs"></ion-checkbox>
        </ion-item>
      </ion-item-group>
      <ion-item-group v-if="multiInputs == false">
        <ion-item>
          <ion-text color="secondary">Porte bonheur: </ion-text>
          <ion-input v-model="filter.ball1Input"></ion-input>
        </ion-item>
      </ion-item-group>
      <ion-item-group v-else>
        <ion-list>
          <ion-item>
            <ion-text color="secondary">Porte bonheur pour la boule 1: </ion-text>
            <ion-input v-model="filter.ball1Input"></ion-input>
          </ion-item>
          <ion-item>
            <ion-text color="secondary">Porte bonheur pour la boule 2: </ion-text>
            <ion-input v-model="filter.ball2Input"></ion-input>
          </ion-item>
          <ion-item>
            <ion-text color="secondary">Porte bonheur pour la boule 3: </ion-text>
            <ion-input v-model="filter.ball3Input"></ion-input>
          </ion-item>
          <ion-item>
            <ion-text color="secondary">Porte bonheur pour la boule 4: </ion-text>
            <ion-input v-model="filter.ball4Input"></ion-input>
          </ion-item>
          <ion-item>
            <ion-text color="secondary">Porte bonheur pour la boule 5: </ion-text>
            <ion-input v-model="filter.ball5Input"></ion-input>
          </ion-item>
          <ion-item>
            <ion-text color="secondary">Porte bonheur pour la boule chance: </ion-text>
            <ion-input v-model="filter.luckyInput"></ion-input>
          </ion-item>
        </ion-list>
      </ion-item-group>
    </ion-content>
  </ion-modal>
</template>

<script src="./LuckyRenderer.ts"></script>