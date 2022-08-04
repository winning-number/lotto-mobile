<template>
  <div id="container">
    <strong>{{ title }}</strong>
    <p>Get the best probability numbers depends on your selected filters. The result could change between two pick because the equality probability are resolved by a randomer</p>
      <v-form @submit="submit">
        <ion-item>
          <ion-label>only the draws picked on the specific day</ion-label>
          <ion-select v-model="selectedDay">
            <ion-select-option
              v-for="(day, index) in days"
              :key="index"
              :value="day"
            >{{ day }}
            </ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>use the second roll if available</ion-label>
          <ion-checkbox v-model="filter.secondRoll"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>include the "super" lotto</ion-label>
          <ion-checkbox v-model="filter.superLotto"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>include the "grand" lotto</ion-label>
          <ion-checkbox v-model="filter.grandLotto"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>include the xmax lotto</ion-label>
          <ion-checkbox v-model="filter.xmaxLotto"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>include the classical lotto</ion-label>
          <ion-checkbox v-model="filter.classicLotto"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>include the old lotto (before 2008)</ion-label>
          <ion-checkbox v-model="filter.oldLotto"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>use the ascendant order (select the least picked ball)</ion-label>
          <ion-checkbox v-model="filter.ascendingOrder"></ion-checkbox>
        </ion-item>
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


<script src="./ProbaExplorer.ts"></script>