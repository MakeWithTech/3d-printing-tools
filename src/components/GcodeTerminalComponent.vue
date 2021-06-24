<template>
  <v-container>
    <p>Gcode Terminal</p>
    <p v-if="hasSerial === true">**** HAS SERIAL *****</p>
  </v-container>
</template>

<script>
export default {
  name: "GcodeTerminalComponent",
  data() {
    return {
      hasSerial: false,
    };
  },
  created() {
    if ("serial" in navigator) {
      this.hasSerial = true;
    }
  },
  methods: {
    checkSerialAgain() {
      if ("serial" in navigator) {
        this.hasSerial = true;
      }
    },
  },
};
</script>
