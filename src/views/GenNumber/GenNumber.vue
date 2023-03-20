<template>
  <ion-page>
    <HeaderPage />
    <ion-content :fullscreen="true">
      <FlashRenderer />
      <LuckyRenderer />
      <ProbaRenderer />
    </ion-content>
  </ion-page>
</template>

<script src="./GenNumber.ts"></script>
