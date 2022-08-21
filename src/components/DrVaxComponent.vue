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
        <p class="font-weight-bold mb-3">Version Beta 1.3</p>
        <h1 class="display-1 font-weight-bold">
          Let's Learn Something Together
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-spacer />
      <v-col cols="8" justify-center>
        <p style="font-size: x-small">
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </v-col>
      <v-spacer />
    </v-row>

    <v-row class="text-center">
      <v-spacer />
      <v-col cols="8" justify-center>
        <p>
          A common problem faced by users of 3d printers is finding appropriate
          software that supports interacting over a USB connections with a 3d
          printer. The "GCODE USB TERMINAL" provides users of 3d printers with
          an easy to access solution since it runs from both Google Chrome and
          Microsoft Edge.
        </p>
        <p>
          These applications are designed for laptops, chromebooks and desktop
          computers. While they may work on a tablet that has USB capabilitiees
          I have not tested on tablets.
        </p>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row class="text-center">
      <v-spacer />
      <v-col cols="8" justify-center>
        <p class="subheading font-weight-bold">The MakeWithTech Platform</p>
        <p>
          The MakeWithTech platform consists of a family of services available
          to the Maker community to help them design, create, make things right
          at home. Make sure you visit the
          <a href="https://forum.makewithtech.com" target="_blank"
            >MakeWithTech User Forum</a
          >
          to discuss your most recent project, get help from thousands of Makers
          about your 3d printer, software or electronics. <b /><b /> If you are
          looking for models to 3d print head over to
          <a href="https://models.makewithtech.com" target="_blank"
            >Models @ MakeWithTech</a
          >
          where you can select a template and produce a custom model for 3d
          printing.
        </p></v-col
      >

      <v-spacer />
    </v-row>
    <v-row class="text-center">
      <v-spacer />
      <v-col cols="8" justify-center>
        <p class="subheading font-weight-regular">
          To learn about me and my background please visit, my personal website
          <a href="https://cogitations.com" target="_blank">Cogitations</a>
        </p>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row class="text-center">
      <v-spacer />
      <v-col cols="8" justify-center>
        <p style="font-size: x-small">Copyright 2021, Cogitations, LLC</p>
        <p style="font-size: x-small">
          License under the MIT License
          <a href="https://opensource.org/licenses/MIT"
            >MIT Open Source License</a
          >
        </p>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DrVaxComponent",

  data: () => ({}),
};
</script>
