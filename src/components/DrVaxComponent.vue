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
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Let's Learn Something Together
        </h1>

        <p class="subheading font-weight-regular">
          To collaboration with DrVax community members,
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
