<template>
  <ion-button :id="this.id" slot="end" color="medium" size="small" :class="{'ion-no-margin': true, 'blink': this.stateBlink}" fill=outline>
    <ion-icon color="medium" :icon="settingsSharp"></ion-icon>
  </ion-button>
  <ion-action-sheet
    :trigger="this.id"
    :header="this.stateBlink ? this.data.actionSheetTitleUpdated : this.data.actionSheetTitle"
    :buttons="this.stateBlink ? this.data.actionSheetButtonsUpdated : this.data.actionSheetButtons"
  ></ion-action-sheet>
</template>

<script src="./ConfigButton.ts"></script>
<style src="./ConfigButton.scss" lang="scss"></style>