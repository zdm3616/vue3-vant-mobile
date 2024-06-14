<script setup lang="ts">
import Charts from "./charts.vue";
import Popup from "./custPopup.vue";
import Header from "./header.vue";
</script>
<template>
  <Header></Header>
  <Charts></Charts>
  <div class="flex justify-between p-[15px] text-[16px]">
    <h1 class="font-semibold">排行榜</h1>
    <Popup></Popup>
  </div>
</template>

<style scoped></style>
