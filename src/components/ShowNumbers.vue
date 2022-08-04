<template>
  <div>
  <ion-row class="ion-justify-content-center">
    <ion-col class="numberCircle">
      <span>{{ ball1 }}</span>
    </ion-col>
    <ion-col class="numberCircle">
      <span>{{ ball2 }}</span>
    </ion-col>
    <ion-col class="numberCircle">
      <span>{{ ball3 }}</span>
    </ion-col>
    <ion-col class="numberCircle">
      <span>{{ ball4 }}</span>
    </ion-col>
    <ion-col class="numberCircle">
      <span>{{ ball5 }}</span>
    </ion-col>
    <ion-col class="numberCircle">
      <span>{{ luckyBall }}</span>
    </ion-col>
  </ion-row>
  </div>
</template>

<style scoped>
.numberCircle {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: inline-flex;
    background: #fff;
    border: 2px solid #666;
    flex-grow: 0;
    padding: 0;
}

.numberCircle span {
    color: #666;
    text-align: center;
    font: 12px Arial, sans-serif;
    width: 25px;
    display: inline-block;
    margin: auto;
}
</style>
<script src="./ShowNumbers.ts"></script>