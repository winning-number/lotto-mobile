<template>
  <ion-row class="ion-justify-content-center">
    <ion-col class="ion-text-center">
      <section class="sn_stage">
        <figure class="sn_classic_ball">
          <span class="sn_number" :style="ballsValues(this.ballsNames.ball1)"></span>
        </figure>
      </section>
    </ion-col>
    <ion-col class="ion-text-center">
      <section class="sn_stage">
        <figure class="sn_classic_ball">
          <span class="sn_number" :style="ballsValues(this.ballsNames.ball2)"></span>
        </figure>
      </section>
    </ion-col>
    <ion-col class="ion-text-center">
      <section class="sn_stage">
        <figure class="sn_classic_ball">
          <span class="sn_number" :style="ballsValues(this.ballsNames.ball3)"></span>
        </figure>
      </section>
    </ion-col>
    <ion-col class="ion-text-center">
      <section class="sn_stage">
        <figure class="sn_classic_ball">
          <span class="sn_number" :style="ballsValues(this.ballsNames.ball4)"></span>
        </figure>
      </section>
    </ion-col>
    <ion-col class="ion-text-center">
      <section class="sn_stage">
        <figure class="sn_classic_ball">
          <span class="sn_number" :style="ballsValues(this.ballsNames.ball5)"></span>
        </figure>
      </section>
    </ion-col>
    <ion-col class="ion-text-center">
      <section class="sn_stage">
        <figure class="sn_lucky_ball">
          <span class="sn_number" :style="ballsValues(this.ballsNames.luckyBall)"></span>
        </figure>
      </section>
    </ion-col>
  </ion-row>
</template>

<script src="./ShowNumber.ts"></script>
<style src="./ShowNumber.scss" lang="scss"></style>