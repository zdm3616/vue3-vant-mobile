<script setup lang="ts">
import { ref } from "vue";
const value = ref("");

const tabsItems = [
  {
    title: "推荐",
    name: "a",
  },
  {
    title: "女生",
    name: "b",
  },
  {
    title: "男生",
    name: "c",
  },
  {
    title: "图书",
    name: "d",
  },
  {
    title: "听书",
    name: "e",
  },
  {
    title: "最新上架",
    name: "f",
  },
];
</script>
<template>
  <div class="py-[15px] px-[20px] bg-[#ffd01e]">
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      background="#ffd01e"
    />
  </div>

  <van-sticky>
    <ul class="flex justify-between p-[15px] bg-[#ffd01e]">
      <li
        v-for="item in tabsItems"
        :key="item.name"
        :title="item.title"
        class="text-[16px] text-center font-medium hover:font-bold"
      >
        {{ item.title }}
      </li>
    </ul>
  </van-sticky>
</template>

<style scoped></style>
