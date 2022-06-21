<template>
  <v-footer color="primary" class="d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>
    <div class="text-white pt-0">MITH CV</div>
    <v-divider></v-divider>
    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>Mickaël THERAUD</strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Footer extends Vue {}
</script>
