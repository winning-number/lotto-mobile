<template>
  <ion-page>
    <AppToolbar />
    <ion-content fullscreen="true">
      <ModalShowDraw v-if="this.showLastDrawDetails"
        :draw="this.lastDrawData"
        @closeCallback="this.closeModalShowLastDraw()"
      />
      <ion-card :disabled="false" button @click="openModalShowLastDraw()">
        <CardHeaderSection
          :headerTitle="this.lastDraw.headerTitle"
          :headerText="this.lastDraw.headerText"
          :subTitle="this.lastDraw.subTitle"
          :type="this.lastDraw.type"
          :style="this.lastDraw.style"
          :draws="this.lastDraw.draws"
          :drawsOutHeader="this.lastDraw.drawsOutHeader"
        />
      </ion-card>
      <ion-card :disabled="false" button @click="nav(RouteNames.GENERATOR)">
        <CardHeaderSection
          :headerTitle="this.nextDraw.headerTitle"
          :headerText="this.nextDraw.headerText"
          :subTitle="this.nextDraw.subTitle"
          :type="this.nextDraw.type"
          :style="this.nextDraw.style"
          :draws="this.nextDraw.draws"
          :drawsOutHeader="this.nextDraw.drawsOutHeader"
        />
      </ion-card>
      <ion-card :disabled="true">
        <CardHeaderSection
          :headerTitle="this.appStats.headerTitle"
          :headerText="this.appStats.headerText"
          :subTitle="this.appStats.subTitle"
          :type="this.appStats.type"
          :style="this.appStats.style"
          :draws="this.appStats.draws"
          :drawsOutHeader="this.appStats.drawsOutHeader"
        />
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script src="./HomePage.ts"></script>
