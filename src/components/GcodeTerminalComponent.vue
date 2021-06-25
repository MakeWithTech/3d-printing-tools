<template>
  <v-container>
    <!-- To Do: Baud Rate Fields, Input Field, Filters, Hints Pop-Up or sidebar with tabs -->
    <!-- To Do: cache printer output until you see a CR then add line -->
    <p>Gcode Terminal</p>
    <p v-if="hasSerial === true">**** YOUR BROWSER HAS SERIAL SUPPORT *****</p>
    <div>
      <v-btn @click="connect" class="mx-6"> connect </v-btn>
      <v-btn @click="disconnect" class="mx-6"> disconnect </v-btn>
    </div>
    <v-data-table
      :headers="logHeader"
      :items="log"
      :items-per-page="1000"
      :height="600"
    >
    </v-data-table>
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
      running: true,
      log: [{ logLine: "First line" }],
      logHeader: [{ text: "Log of 3d Printing Output", value: "logLine" }],
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
      this.readLoop();
    },
    async disconnect() {
      console.log("in disconnect");
      this.running = false;
    },
    async readLoop() {
      console.log("Readloop");

      while (this.running) {
        const { value, done } = await this.reader.read();
        console.log("value", value);
        console.log("done", done);
        if (value) {
          this.log.push({ logLine: value });
        }
        if (done) {
          console.log("[readLoop] DONE", done);
          break;
        }
      }
      // Clean up by canceling the read and closing the port
      // This needs work and debugging
      console.log("Releasing lock");
      this.reader.releaseLock();
      console.lot("Close the port");
      this.port.close();
      console.log("Port Closed");
    },
    writeToStream(line) {
      const writer = this.outputStream.getWriter();
      console.log("[SEND]", line);
      writer.write(line + "\r");
      writer.releaseLock();
    },
  },
};
</script>
