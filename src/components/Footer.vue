<template>
  <v-footer color="primary" class="d-flex flex-column pa-5">
    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>Mickaël THERAUD</strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Footer extends Vue {}
</script>
