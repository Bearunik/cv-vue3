<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('contact') }}</v-card-title>
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="3">
          <v-icon icon="mdi-at" class="ma-2" size="x-large"></v-icon>
        </v-col>
        <v-col class="d-flex align-center mailto" @click="openMail">
          {{ mail }}
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="3">
          <v-icon icon="mdi-map-marker" class="ma-2" size="x-large"></v-icon>
        </v-col>
        <v-col class="d-flex align-center">
          {{ location }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { UserAboutMeController } from '@/controllers/UserAboutMeController'
import i18n from '@/i18n'
import { Vue, Options } from 'vue-class-component'

@Options({
  data () {
    return {
      mail: UserAboutMeController.aboutMe.mail,
      location: UserAboutMeController.aboutMe.location
    }
  },
  methods: {
    openMail (): void {
      const subject =
        'subject=' + encodeURIComponent(i18n.global.t('mail-subject'))
      window.location.href = `mailto:${this.mail}?${subject}`
    }
  }
})
export default class Contact extends Vue {
  mail!: string
  location!: string
}
</script>

<style>
.mailto {
  cursor: pointer;
}
</style>
