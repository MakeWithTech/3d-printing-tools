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
        <p class="font-weight-bold mb-3">Version Beta 1.2</p>
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
          The initial two utilities provided in this application assist with
          calibrating FDM 3d printers that use Gcocde. A common problem faced by
          users of 3d printers is finding appropriate software that supports
          interacting over a USB connections with a 3d printer. The "GCODE USB
          TERMINAL" provides users of 3d printers with an easy to access
          solution since it runs from both Google Chrome and Microsoft Edge.
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
