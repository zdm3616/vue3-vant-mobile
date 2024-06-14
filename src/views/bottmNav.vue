<script setup lang="ts">
import { ref } from "vue";
const active = ref("");
</script>

<template>
  <div class="h-[50px]">
    <van-tabbar route>
      <van-tabbar-item to="/index" icon="home-o">书城</van-tabbar-item>
      <van-tabbar-item to="/community" icon="search">社区</van-tabbar-item>
      <van-tabbar-item to="/welfare" icon="friends-o">福利</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
