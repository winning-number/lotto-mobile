<template>
  <div id="container">
    <strong>{{ title }}</strong>
    <p>Get your favorite numbers with your lucky data. It's could be your cat or dog name, girlfriend or boyfriends name, your favorite number or as you that give you lucky
      basicly, this generation should be always return the same result with the same lucky input. It's YOUR favorite numbers :)
    </p>
    <v-form @submit="submit">
      <ion-item>
        <ion-label>click to select a different lucky input for each balls</ion-label>
        <ion-checkbox v-model="multiInputs"></ion-checkbox>
      </ion-item>
      <ion-item-group v-if="multiInputs">
        <ion-item>
          <ion-label>lucky input for the first ball</ion-label>
          <ion-input v-model="filterAny.ball1Input"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>lucky input for the second ball</ion-label>
          <ion-input v-model="filterAny.ball2Input"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>lucky input for the third ball</ion-label>
          <ion-input v-model="filterAny.ball3Input"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>lucky input for the fourth ball</ion-label>
          <ion-input v-model="filterAny.ball4Input"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>lucky input for the fifth ball</ion-label>
          <ion-input v-model="filterAny.ball5Input"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>lucky input for the lucky ball</ion-label>
          <ion-input v-model="filterAny.luckyInput"></ion-input>
        </ion-item>
      </ion-item-group>

      <ion-item-group v-else>
         <ion-item>
          <ion-label>lucky input</ion-label>
          <ion-input v-model="filterOne.input"></ion-input>
        </ion-item>
      </ion-item-group>
    <ion-button @click="generateNumbers()" color="secondary" class="ion-margin-top ion-margin-bottom" expand="block" shape="round" fill="solid" type="submit">Go</ion-button>
    </v-form>
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

<script src="./LuckyExplorer.ts"></script>