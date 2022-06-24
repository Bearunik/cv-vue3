<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12" sm="8">
        <Experiences class="mb-5" />
        <Studies class="mb-5" />
      </v-col>

      <v-col cols="12" sm="4">
        <Contact class="mb-5" />
        <AboutMe class="mb-5" />
        <Skills class="mb-5" />
      </v-col>

      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Experiences from '@/components/Experiences.vue'
import Studies from '@/components/Studies.vue'
import Skills from '@/components/Skills.vue'
import AboutMe from '@/components/AboutMe.vue'
import Contact from '@/components/Contact.vue'

@Options({
  components: { Experiences, Studies, Contact, AboutMe, Skills }
})
export default class HomeView extends Vue {}
</script>
