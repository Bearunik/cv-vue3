<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('about-me') }}</v-card-title>
    <v-card-text>
      "{{ aboutMe.text }}"
      <v-spacer class="ma-3"></v-spacer>
      <v-row class="text-center" no-gutters>
        <v-col
          v-for="(hobby, hobbyIndex) in aboutMe.hobbies"
          v-bind:key="hobbyIndex"
        >
          <v-icon
            :icon="`mdi-${hobby.icon}`"
            :color="hobby.color"
            class="ma-2"
            size="x-large"
            :title="hobby.title"
          >
          </v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserAboutMeController } from '@/controllers/UserAboutMeController'
import AboutMeInterface from '@/interfaces/AboutMeInterface'

@Options({
  data () {
    return {
      aboutMe: UserAboutMeController.aboutMe
    }
  }
})
export default class Skills extends Vue {
  aboutMe!: AboutMeInterface | undefined
}
</script>

<style scoped>
i {
  cursor: help;
}
</style>
