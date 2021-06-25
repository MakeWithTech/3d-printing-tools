<template>
  <v-container>
    <p>Gcode Terminal</p>
    <p v-if="hasSerial === true">**** HAS SERIAL *****</p>
    <v-btn @click="connect"> connect </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "GcodeTerminalComponent",
  data() {
    return {
      hasSerial: false,
      port: null,
      inputField: null,
      inputStream: null,
      inputDone: null,
      outputStream: null,
      outputDone: null,
      reader: null,
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
    test() {
      console.log("test");
    },
    async connect() {
      console.log("in connect");
      //const inputField = document.getElementById("input");
      //inputField.disabled = false;
      //inputField.focus();
      //inputField.select();
      //document.getElementById("sendButton").disabled = false;
      //document.getElementById("connect").disabled = true;
      this.port = await navigator.serial.requestPort();
      // - Wait for the port to open.
      await this.port.open({ baudRate: 115200 });
      console.log("Open");
      // eslint-disable-next-line no-undef
      let decoder = new TextDecoderStream();
      this.inputDone = this.port.readable.pipeTo(decoder.writable);
      this.inputStream = decoder.readable;
      // eslint-disable-next-line no-undef
      const encoder = new TextEncoderStream();
      this.outputDone = encoder.readable.pipeTo(this.port.writable);
      this.outputStream = encoder.writable;
      this.reader = this.inputStream.getReader();
      // readLoop()
    },
  },
};
</script>
