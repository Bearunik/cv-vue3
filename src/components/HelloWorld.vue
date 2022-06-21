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

      <v-col cols="12">
        <p>{{ $t('message') }}</p>
        <h1>{{ msg }}</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <Skills />
      </v-col>

      <v-col class="mb-5" cols="12">
        <Studies />
      </v-col>

      <v-col class="mb-5" cols="12">
        <Experiences />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Experiences from '@/components/Experiences.vue'
import Skills from '@/components/Skills.vue'
import Studies from '@/components/Studies.vue'

@Options({
  props: {
    msg: String
  },
  components: { Experiences, Skills, Studies }
})
export default class HelloWorld extends Vue {
  msg: string | undefined
}
</script>
