import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/welfare",
    name: "welfare",
    component: () => import("../views/welfare/index.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../views/community/index.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my/index.vue"),
  },
] satisfies RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
