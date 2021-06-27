<template>
  <v-container>
    <!-- To Do: Baud Rate Fields, Input Field, Filters, Hints Pop-Up or sidebar with tabs -->
    <!-- To Do: cache printer output until you see a CR then add line -->
    <p>Gcode Terminal</p>
    <p v-if="hasSerial === true">
      **** YOUR BROWSER HAS WEB SERIAL SUPPORT *****
    </p>
    <p v-if="tooSmall === true">
      **** This application requires a minimum window size of 600px to work
      properly *****
    </p>
    <div>
      <v-btn @click="connect" class="mx-6"> connect </v-btn>
      <v-btn @click="disconnect" class="mx-6"> disconnect </v-btn>
      <v-btn @click="clearLog" class="mx-6"> clear log</v-btn>
    </div>
    <v-form v-on:submit.prevent="checkSend">
      <v-row>
        <v-col>
          <v-text-field
            v-on:keyup="checkSend"
            label="Enter gcode to send here"
            v-model="sendText"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <v-row>
      <v-col col="12" sm="8">
        <v-data-table
          :headers="logHeader"
          :items="log"
          :item-key="lineNumber"
          :dense="true"
          :items-per-page="-1"
        >
        </v-data-table>
      </v-col>
      <v-col col="12" sm="4">
        <v-card class="pa-2" outlined tile>
          <p>Help text will go here ...</p>
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
    };
  },
  created() {
    if ("serial" in navigator) {
      this.hasSerial = true;
    }
    if (window.innerWidth > 599) {
      this.tooSmall = false;
    }
  },
  methods: {
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
      console.log("[SEND]", this.sendText);
      writer.write(this.sendText + "\r");
      writer.releaseLock();
    },
    gotoSelectedRow() {
      this.$nextTick(() => this.$vuetify.goTo("lastRow"));
    },
  },
};
</script>
