<template>
  <v-container>
    <!-- To Do: Baud Rate Fields, Input Field, Filters, Hints Pop-Up or sidebar with tabs -->
    <!-- To Do: cache printer output until you see a CR then add line -->
    <p class="font-weight-medium">Gcode Terminal</p>
    <p v-if="hasSerial === false">
      **** Your browser does not support the web serial framework required for
      this application *****
    </p>
    <p v-if="tooSmall === true">
      **** This application requires a minimum window size of 600px to work
      properly *****
    </p>
    <v-row>
      <v-col col="12" sm="3">
        <v-select
          class="mx-0"
          outlined
          :items="baudRate"
          label="Baud Rate"
          v-model="selectedBaudRate"
        ></v-select>
      </v-col>
      <v-col col="12" sm="3">
        <v-btn @click="connect" class="my-3"> connect </v-btn>
      </v-col>
      <v-col col="12" sm="3">
        <v-btn @click="disconnect" class="my-3"> disconnect </v-btn>
      </v-col>
      <v-col col="12" sm="3">
        <v-btn @click="clearLog" class="my-3"> clear log</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-checkbox
        class="mt-5 mx-2"
        v-model="upperCase"
        label="Upper Case Commands"
      >
      </v-checkbox>
    </v-row>
    <v-row class="mt-5">
      <v-col>
        <v-form v-on:submit.prevent="checkSend">
          <v-text-field
            v-on:keyup="checkSend"
            label="Enter gcode to send here"
            v-model="sendText"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col col="12" sm="8">
        <v-data-table
          :headers="logHeader"
          :items="log"
          :item-key="lineNumber"
          :dense="true"
          :items-per-page="10"
          :page="-1"
        >
        </v-data-table>
      </v-col>
      <v-col col="12" sm="4">
        <v-card class="pa-2" outlined tile>
          <p class="font-weight-bold">
            Common Gcode Commands used in Printer Calibration
          </p>
          <v-list>
            <v-list-item> M115 ; Display Firmware Version </v-list-item>
            <v-list-item> M503 ; Display Saved Parameters </v-list-item>
            <v-list-item> M83 ; Set extruder to relative mode </v-list-item>
            <v-list-item> G92 E0 ; Set extuder to 0 </v-list-item>
            <v-list-item>
              G1 E100 F100 ; Push 100mm of filament through the extruder at
              100mm per minute
            </v-list-item>
            <v-list-item>
              M92 X80.00 Y80.00 Z400.00 E95.00 ; Update
            </v-list-item>
            <v-list-item> M500 ; Save Updated Parameters to EPROM </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GcodeTerminalComponent",
  data() {
    return {
      hasSerial: false,
      tooSmall: true,
      port: null,
      inputField: null,
      inputStream: null,
      inputDone: null,
      outputStream: null,
      outputDone: null,
      reader: null,
      running: true,
      partialLog: "",
      lineNumber: "0",
      log: [{ lineNumber: null, logLine: null }],
      logHeader: [
        { text: "Line", value: "lineNumber" },
        { text: "Log of 3d Printing Output", value: "logLine" },
      ],
      sendText: null,
      windowSize: {
        x: 0,
        y: 0,
      },
      upperCase: false,
      baudRate: [115200, 57600, 9600],
      selectedBaudRate: 115200,
    };
  },
  created() {
    if ("serial" in navigator) {
      this.hasSerial = true;
    }
    if (window.innerWidth > 599) {
      this.tooSmall = false;
    }
    this.windowSize.x = window.innerWidth;
    this.windowSize.y = window.innerHeight;
  },
  methods: {
    async connect() {
      console.log("in connect");
      this.port = await navigator.serial.requestPort();
      // - Wait for the port to open.
      await this.port.open({ baudRate: this.selectedBaudRate });
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
      console.log(this.lineNumber);
      console.log(this.log);

      // Read replies from from the 3d printer
      // Keep reading until we see a <CR>
      // Finally split the proceeded string into separate lines
      // on <LF>

      while (this.running) {
        const { value, done } = await this.reader.read();
        if (value) {
          console.log("raw: ", value);
          this.partialLog = this.partialLog + value;
          let endChar = this.partialLog.charAt(this.partialLog.length - 1);
          // Continue reading until we see a <LF> ascii 10 or <CR> ascii 13
          if (endChar.charCodeAt(0) === 13 || endChar.charCodeAt(0) === 10) {
            let formattedArray = this.partialLog.split("\n");
            // Need to use arrow format to allow access to this variables
            formattedArray.forEach((formattedString) => {
              if (formattedString.length > 0) {
                // Now add the string to the array
                this.lineNumber = (parseInt(this.lineNumber) + 1).toString();
                this.log.push({
                  lineNumber: this.lineNumber,
                  logLine: formattedString,
                });
              }
            });
            this.partialLog = "";
            // Force scroll to bottom
            // $vuetify.goTo(target, options)
            //     this.$vuetify.goTo(0)
          }
        }
        if (done) {
          console.log("[readLoop] DONE", done);
          break;
        }
      }
      console.log("Releasing lock");
      await this.reader.releaseLock();
      console.log("Close the port");
      this.port.close();
      console.log("Port Closed");
    },
    checkSend(e) {
      if (e.keyCode === 13) {
        console.log("Enter was pressed");
        console.log(this.sendText);
        this.writeToStream();
        this.sendText = null;
      }
    },
    clearLog() {
      this.log = [];
    },
    writeToStream() {
      const writer = this.outputStream.getWriter();
      let textToSend = this.sendText;
      if (this.upperCase) {
        textToSend = textToSend.toUpperCase();
      }
      console.log("[SENT]", textToSend);
      this.log.push({
        lineNumber: this.lineNumber,
        logLine: "[SENT] " + textToSend,
      });
      writer.write(textToSend + "\r");
      writer.releaseLock();
    },
    gotoSelectedRow() {
      this.$nextTick(() => this.$vuetify.goTo("lastRow"));
    },
  },
};
</script>
