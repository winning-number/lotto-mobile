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
        Mieux que le flash ? Le Smart Flash ! Vous pouvez affiner vos critères de sélection pour générer un numéro gagnant !
      </ion-text>
      <ion-row class="my-spacer"></ion-row>
      <ion-item-group>
        <ion-item>
          <ion-text color="secondary">Exclure les précédents numéros gagnants</ion-text>
          <ion-checkbox v-model="filter.excludeAlreadyPicked"></ion-checkbox>
        </ion-item>
        <ion-item>
        <ion-text color="secondary">
          Exclure certains numéro du tirage (hors numéro chance)
        </ion-text>
          <ion-select multiple v-model="filter.excludeBallNumber">
            <ion-select-option
              v-for="n in maxBallNumber"
              :key="n + '-ball'"
              :value="n"
            >{{ n }}</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-text color="secondary">Exclure certains numéro chance du tirage</ion-text>
          <ion-select multiple v-model="filter.excludeLuckyNumber">
            <ion-select-option
              v-for="n in maxLuckyNumber"
              :key="n + '-lucky'"
              :value="n"
            >{{ n }}</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-item-group>
    </ion-content>
  </ion-modal>
</template>

<script src="./FlashRenderer.ts"></script>