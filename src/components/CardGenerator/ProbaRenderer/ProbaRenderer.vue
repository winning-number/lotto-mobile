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
        Utilise la probabilité pour obtenir un tirage. Tu peux filtrer plusieurs éléments pour affiner ton résultat.
        Tu peux aussi choisir d'utiliser les numéros les plus souvent ou les moins souvent tirés.
      </ion-text>
      <br /><br />
      <ion-text color="medium" style="font-size: small;">
        Attention, il y a peu de tirages concernant les super loto, grand loto et loto de Noël. Il est donc possible que les résultats ne soient pas très pertinents
        si vous choisissez d'utiliser ces tirages seul.
      </ion-text>
      <ion-row class="my-spacer"></ion-row>
      <ion-item-group>
        <ion-item>
          <ion-text color="secondary">Utiliser les tirages d'un jour de la semaine</ion-text>
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
            <ion-label color="secondary">Utiliser les lotos classiques</ion-label>
            <ion-checkbox v-model="filter.classicLotto"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label color="secondary">Utiliser les seconds tirages: </ion-label>
            <ion-checkbox v-model="filter.secondRoll"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label color="secondary">Utiliser les "Super loto":</ion-label>
            <ion-checkbox v-model="filter.superLotto"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label color="secondary">Utiliser les "Grand loto":</ion-label>
            <ion-checkbox v-model="filter.grandLotto"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label color="secondary">Utiliser les "loto de Noël":</ion-label>
            <ion-checkbox v-model="filter.xmaxLotto"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-label color="secondary">Utiliser les anciens loto (avant 2008):</ion-label>
            <ion-checkbox v-model="filter.oldLotto"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-text color="secondary">Obtenir les numéros les plus souvent tirés: </ion-text>
            <ion-checkbox v-model="filter.ascendingOrder"></ion-checkbox>
          </ion-item>
        </ion-list>
      </ion-item-group>
    </ion-content>
  </ion-modal>
</template>

<script src="./ProbaRenderer.ts"></script>