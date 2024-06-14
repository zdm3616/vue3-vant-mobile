<script setup lang="ts">
import swipe1 from "@/assets/image/swipe1.png";
import swipe2 from "@/assets/image/swipe2.jpg";
const images = [swipe1, swipe2];
</script>

<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" class="h-[150px]" />
    </van-swipe-item>
  </van-swipe>
</template>

<style scoped></style>
