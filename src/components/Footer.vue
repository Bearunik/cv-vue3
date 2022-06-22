<template>
  <v-footer color="primary" class="d-flex flex-column pb-5">
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
import { Options, Vue } from 'vue-class-component'

@Options({
  data () {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    }
  }
})
export default class Footer extends Vue {
  icons!: Array<string>
}
</script>
