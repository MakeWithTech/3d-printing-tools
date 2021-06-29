import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ExtruderCalcView from "../views/ExtruderCalcView.vue";
import GcodeTerminalView from "../views/GcodeTerminalView.vue";
import PIDCalibration from "../views/PIDCalibrationView.vue";
import CalibrationChecklist from "../views/CalibrationChecklistView.vue";

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
  {
    path: "/pidcalibration",
    name: "PIDCalibration",
    component: PIDCalibration,
  },
  {
    path: "/calibrationchecklist",
    name: "CalibrationChecklist",
    component: CalibrationChecklist,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
