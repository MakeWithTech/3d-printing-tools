<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p class="display-2 font-weight-bold">Calibration Checklist</p>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="8" justify-center>
        <p>
          As a hybrid electro-mechanical device, your 3d printer, just like your
          car or furnace, requires both routine maintenance and calibration. In
          addition, over time, as components age, you will have to recalibrate
          your 3d printer.
        </p>
        <p>
          Even if your recieve a new fully assembled 3d printer your should
          review this checklist and learn how to perform all of these
          maintenance steps.
        </p>

        <v-card class="pa-2 mb-3">
          <p><b>Tools Required</b></p>
          <ul>
            <li>HEX Drivers to tighten frame</li>
            <li>Spanner (open end wrench) to adjust eccentric nuts</li>
            <li>120mm or longer ruler to use for extruder step calibration</li>
            <li>Optional - Digital Caliper to check print calibration</li>
            <li>
              Post it Note or sheet of standard 20lb laser paper for bed level
              test
            </li>
            <li>Diagonal (side) cutter to cut filament for loading</li>
            <li>Optional - Needle Nose pliers</li>
            <li>Screw Drivers as needed</li>
            <li>Super Lube or Equivalent Silicone Grease</li>
          </ul>
        </v-card>
        <p>Here is a list of common steps your should take:</p>
        <v-card class="pa-2 mb-3">
          <p><b>Before You First Print</b></p>
          <ul>
            <li>
              Tighten bolts finger tight and then turn 1/4 turn more. Do not
              over tighten.
            </li>
            <li>Eliminate guide wheel wobble by adjusting eccentric nuts.</li>
            <li>
              Check Belts are firm but not over tight. You should be able to
              push belts down slightly but they should feel firm.
            </li>
            <li>Level the Print Bed</li>
            <li>Calibrate the Extruder</li>
            <li>Run a PID Calibration</li>
            <li>Print a Calibration Cube to Verify Print Quality</li>
          </ul>
        </v-card>
        <v-card class="pa-2 mb-3">
          <p><b>Every 5 Prints</b></p>
          <ul>
            <li>Clean the Print Bed Thoroughly</li>
          </ul>
        </v-card>

        <v-card class="pa-2 mb-3">
          <p><b>Every 20 Prints</b></p>
          <ul>
            <li>Check Bolts and guide wheels are snug</li>
            <li>Check Belts are firm</li>
          </ul>
        </v-card>

        <v-card class="pa-2 mb-3">
          <p><b>Every 50 Prints </b></p>
          <ul>
            <li>All "Every 20 Print" checks, plus ...</li>
            <li>Relevel the Print Bed Verify and Calibrate the Extruder</li>
            <li>Print a Calibration Cube</li>
            <li>Run a PID Calibration</li>
            <li>Libricate Z-Axis Screw</li>
          </ul>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CalibrationChecklist",

  data: () => ({}),
};
</script>
