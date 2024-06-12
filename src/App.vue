<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
const value = ref("");
</script>

<template>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    background="#4fc08d"
  />
</template>

<style scoped></style>
