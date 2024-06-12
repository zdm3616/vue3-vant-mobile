import { VantResolver } from "@vant/auto-import-resolver";
import vue from "@vitejs/plugin-vue";
import postCssPxToRem from "postcss-pxtorem";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // rootValue: 75, // 这里写设计稿的宽度/10即可，例如设计稿宽度是750px就写75
          //vant默认是37.5，如果是使用了vant的话可以像下面这样写
          rootValue: 37.5,
          propList: ["*"], // 需要转换的属性，默认转换所有属性
          selectorBlackList: [], // CSS选择器黑名单，防止部分选择器被转换
          exclude: /\/node_modules\//i, // 忽略包文件转换rem
        }),
      ],
    },
  },
});
