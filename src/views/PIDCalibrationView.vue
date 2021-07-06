<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p class="display-2 font-weight-bold">Temperature Calibration</p>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="8" justify-center>
        <p>
          The temperature sensors and heating elements in every 3d printer vary
          slightly. For optimal temperature acuracy you need to calibrate these
          elements.
        </p>
        <p>
          When your 3d printer attempts to heat the bed or nozzle to a specific
          temperature it cannot just turn on the heating element, wait to reach
          the specific temperature and then turn off the heating elements. The
          residual heat in the heating element will cause the temperaure of the
          selected component to overrun the target. Instead a sophisticated
          algorithym, proportional-intergral-derivation, PID for short, is used.
        </p>
        <p>
          3d printers with current and complete firmware support the M301 and
          M304 commands to calibrate this algorithym. Here are the steps to
          calibrate your printers PID algorithym:
        </p>

        <v-card class="pa-2 mb-3 font-weight-medium my-2">
          <ul>
            <li class="ma-2">
              Send a M303 E0 S200 command to your printer to calibrate extruder
              0 (your first extruder), for a temperate of 200C
            </li>
            <li class="ma-2">
              Update the hot end parameters by sending M301 P[value] I[value]
              D[value]. Do not enter the square brackets.
            </li>
            <li class="ma-2">
              Send a M303 E-1 S60 command to your printer to calibrate the bed
              at a temperature of 60c. This is the same command you use for the
              extruder. The E value selects the extruder or the bed.
            </li>

            <li class="ma-2">
              Update the bed parameters by sending M304 P[value] I[value]
              D[value]. Do not enter the square brackets.
            </li>
            <li class="ma-2">
              Write the values (store to EEPROM) by issuing a M500 command
            </li>
          </ul>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PIDCalibration",

  data: () => ({}),
};
</script>
