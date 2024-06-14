<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
</script>
<template>
  <span @click="showPopup" class="flex cursor-pointer">热门分类</span>
  <van-popup
    v-model:show="show"
    :style="{ width: '60%', height: '100%' }"
    closeable
    close-icon-position="top-left"
    position="right"
  >
    <div class="p-[20px]">
      <h1 class="text-center font-semibold">热门分类</h1>
    </div>
  </van-popup>
</template>

<style scoped></style>
