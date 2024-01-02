<template>
  <ion-toolbar>
    <ion-row class="ion-justify-content-center">
      <ion-col class="ion-text-center">
        <section class="ssr_stage">
          <figure class="ssr_classic_ball">
            <span class="ssr_number" :style="ballsValues(this.ballsNames.ball1)"></span>
          </figure>
        </section>
      </ion-col>
      <ion-col class="ion-text-center">
        <section class="ssr_stage">
          <figure class="ssr_classic_ball">
            <span class="ssr_number" :style="ballsValues(this.ballsNames.ball2)"></span>
          </figure>
        </section>
      </ion-col>
      <ion-col class="ion-text-center">
        <section class="ssr_stage">
          <figure class="ssr_classic_ball">
            <span class="ssr_number" :style="ballsValues(this.ballsNames.ball3)"></span>
          </figure>
        </section>
      </ion-col>
      <ion-col class="ion-text-center">
        <section class="ssr_stage">
          <figure class="ssr_classic_ball">
            <span class="ssr_number" :style="ballsValues(this.ballsNames.ball4)"></span>
          </figure>
        </section>
      </ion-col>
      <ion-col class="ion-text-center">
        <section class="ssr_stage">
          <figure class="ssr_classic_ball">
            <span class="ssr_number" :style="ballsValues(this.ballsNames.ball5)"></span>
          </figure>
        </section>
      </ion-col>
      <ion-col class="ion-text-center">
        <ion-text color="medium" style="font-size: x-small;"></ion-text>
      </ion-col>
      <ion-col class="ion-text-center">
        <section class="ssr_stage">
        </section>
      </ion-col>
    </ion-row>
  </ion-toolbar>
</template>

<script src="./ShowSecondRoll.ts"></script>
<style src="./ShowSecondRoll.scss" lang="scss"></style>