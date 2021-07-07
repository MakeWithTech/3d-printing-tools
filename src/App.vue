<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-row class="mt-15">
        <v-col>
          <v-btn class="ma-3" text to="/calibrationchecklist">
            <v-icon left> mdi-calculator</v-icon>
            <router-link to="/calibrationchecklist">
              &nbsp;Checklist</router-link
            >
          </v-btn>
          <v-btn class="ma-3" text to="/gcodeterminal">
            <v-icon left> mdi-console</v-icon>
            <router-link to="/gcodeterminal"> &nbsp;Terminal</router-link>
          </v-btn>
          <v-btn class="ma-3" text to="/extrudercalc">
            <v-icon left> mdi-rotate-right</v-icon>
            <router-link to="/extrudercalc"> &nbsp;Extruder Steps</router-link>
          </v-btn>
          <v-btn class="ma-3" text to="/pidcalibration">
            <v-icon left> mdi-temperature-celsius</v-icon>
            <router-link to="/pidcalibration">
              &nbsp;PID (Temperature)</router-link
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- Non breaking spaces added to title to solve a truncation bug -->
      <v-app-bar-title shrink-on-scroll
        >DrVax 3d Printing Utilities &nbsp;
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-down">
        <v-btn class="mr-2" text to="/">
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn class="mr-2" text href="https://drvax.com">
          <a href="https://drvax.com">DrVax Blog</a>
        </v-btn>
        <v-btn class="mr-2" text href="https://youtube.com/c/drvax">
          <a href="https://youtube.com/c/drvax">YouTube Channel</a>
        </v-btn>
        <v-btn class="mr-2" text to="/about">
          <router-link to="/about">About</router-link>
        </v-btn>
      </span>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),
};
</script>
