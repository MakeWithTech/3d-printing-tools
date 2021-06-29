<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />

        <p class="font-weight-bold mb-3">Calibration Checklist</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CalibrationChecklist",

  data: () => ({}),
};
</script>
