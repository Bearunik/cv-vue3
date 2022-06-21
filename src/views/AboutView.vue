<template>
  <v-container class="about">
    <Project />
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Project from '@/components/Project.vue'

@Options({ components: { Project } })
export default class AboutView extends Vue {}
</script>
