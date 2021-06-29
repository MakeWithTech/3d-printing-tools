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

        <p class="font-weight-bold mb-3">version pre-alpha 1.1</p>

        <h1 class="display-2 font-weight-bold mb-3">
          Let's Learn Something Together
        </h1>

        <p class="subtitle-2">
          This web application is provided at no cost and with no warrenty.<br />
          Please use it at your own risk and assume all responsibility for any
          <br />
          damage to your equiptment.
        </p>

        <v-card flat class="pa-8">
          <p>
            The initial two utilities provided in this application assist with
            calibrating FDM 3d printers that use Gcocde. A common problem faced
            by uses of 3d printers is finding appropriate software that supports
            interacting over a USB connections with a 3d printer. The "GCODE USB
            TERMINAL" provides users of 3d printers with an easy to access
            solutions since it runs from both Google Chrome and Microsoft Edge.
          </p>
          <p>
            These applications are designed for laptops, chromebooks and desktop
            computers. While they may work on a tablet that has USB
            capabilitiees I have not tested on tablets.
          </p>
        </v-card>

        <p class="subheading font-weight-regular">
          To collaboration with DrVax community members,<br />
          and discuss your 3d printing experiences,
          <br />please join our online
          <a href="https://forum.drvax.com" target="_blank">Discussion Forum</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DrVaxComponent",

  data: () => ({}),
};
</script>
