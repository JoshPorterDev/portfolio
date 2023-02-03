import { createRouter, createWebHistory } from "vue-router";

import Base from "../layouts/Base.vue";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import ReadingList from "../views/ReadingList.vue";
import Astrophotography from "../views/Astrophotography.vue";

const routes = [
  {
    path: "/",
    component: Base,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/projects",
        name: "projects",
        component: Projects
      },
      {
        path: "/reading-list",
        name: "reading-list",
        component: ReadingList
      },
      {
        path: "/astrophotography",
        name: "astrophotography",
        component: Astrophotography
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
