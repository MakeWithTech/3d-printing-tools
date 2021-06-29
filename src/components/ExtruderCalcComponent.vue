<template>
  <v-container>
    <v-row>
      <v-col class="pa-4">
        <v-card flat>
          <p>
            FDM 3d Printers use stepper motors to move the gears in the extruder
            that expel the filament. Each stepper motor has a defined number of
            steps to complete a 360-degree rotation. Depending on the gearing of
            your extruder, your 3d printer requires varying numbers of steps to
            extruder 1mm of filament.
          </p>
          <p>
            This simple application assists with calculating a new extruder step
            value for your FDM 3d Printer. The detailed procedure is available
            in videos on the DrVax YouTube channel. The concept is quite simple.
            Send the printer the Gcode instruction to feed a known length of
            filament through the extruder. Measure the actual length feed and
            then adjust the firmware E steps parameter to calibrate correctly.
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col col="12" sm="4" class="pa-4">
        <v-form v-on:submit.prevent>
          <label>1. Original M92 E value: </label
          ><v-text-field v-model="originalEValue"></v-text-field> <br /><br />
          <label>2. Measured extruded filement: </label
          ><v-text-field v-model="measuredDistance"></v-text-field> <br /><br />
          <label>New M92 E value: </label>
          {{ newEValue > 0 ? newEValue : "[Fill in fields 1 & 2]" }}
        </v-form>
      </v-col>
      <v-col col="12" sm="4" class="pa-4">
        <br />
        <v-card class="pa-2" outlined tile>
          Enter the value echoed from the M503 command for the E parameter.
        </v-card>
        <br /><br />
        <v-card class="pa-2" outlined tile>
          Measure the distance from your extruder to your mark and enter here.
        </v-card>
        <br /><br />
        <v-card class="pa-2" outlined tile> New Calculated E Value. </v-card>
      </v-col>
      <v-col col="12" sm="4" class="pa-4">
        <br />
        <v-card class="pa-2" outlined tile>
          <ol class="font-weight-medium my-2">
            <li class="my-2">
              Enter an M503 command into the gcode terminal to obtain the
              current M92 values.
            </li>
            <li class="my-2">Mark out 120 mm of filement from the extruder.</li>
            <li class="my-2">
              Use the G1 E100 F100 command to extrude 100 millimeters of
              filament.
            </li>
            <li class="my-2">Measure the filament left before the extruder.</li>
            <li class="my-2">
              Your etruder multiplier is off by 120 minus this measurement.
            </li>
            <li class="my-2">
              Calculate the new extruder multiplier by using the percentage
              difference between the two values. Or just use the calculator on
              the left.
            </li>
            <li class="my-2">
              Enter the values into the calulator and us an M92 command to
              update the value in your firmware. Replace the X, Y and Z values
              with the original values. For example:<br /><br />
              M92 X80.00 Y80.00 Z400.00 E104.4 <br /><br />
              Where 104.4 is the new calculated value.
            </li>
          </ol>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ExtruderCalcComponent",
  data() {
    return {
      originalEValue: 0,
      measuredDistance: 0,
    };
  },
  created() {},
  computed: {
    // a computed getter
    newEValue: function () {
      let remainingMeasurement = 120 - this.measuredDistance;
      let calculatedEValue = (this.originalEValue * 100) / remainingMeasurement;
      return calculatedEValue;
    },
  },
};
</script>
