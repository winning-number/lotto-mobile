<template>
  <div id="container">
    <strong>{{ title }}</strong>
    <p>Get the full random numbers</p>
    <ion-button @click="getNumbers()" color="secondary" class="ion-margin-top ion-margin-bottom"  expand="block" shape="round" fill="solid" type="submit">Go</ion-button>
  </div>
</template>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

<script src="./RandomExplorer.ts"></script>