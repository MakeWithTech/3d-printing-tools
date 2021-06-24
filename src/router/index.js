import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ExtruderCalcView from "../views/ExtruderCalcView.vue";
import GcodeTerminalView from "../views/GcodeTerminalView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/extrudercalc",
    name: "ExtruderCalc",
    component: ExtruderCalcView,
  },
  {
    path: "/gcodeterminal",
    name: "GcodeTerminal",
    component: GcodeTerminalView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
