<template>
  <v-container class="notFound">
    <v-card class="mb-5 elevation-3">
      <v-card-title class="text-primary">
        {{ $t('not-found.title') }}
      </v-card-title>
      <v-card-text>{{ $t('not-found.desc') }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Project from '@/components/Project.vue'

@Options({ components: { Project } })
export default class AboutView extends Vue {}
</script>
