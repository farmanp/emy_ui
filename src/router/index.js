import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../components/Dashboard";
import Report from "../components/dashboard/Report";
import ActionItems from "../components/dashboard/ActionItems";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/home",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  {
    path: "/action_items",
    name: "ActionItems",
    component: ActionItems,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
