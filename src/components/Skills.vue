<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('skills') }}</v-card-title>
    <v-card-text>
      <v-row class="text-center" no-gutters>
        <v-col
          class="d-flex justify-center"
          v-for="(skill, skillIndex) in skills"
          v-bind:key="skillIndex"
        >
          <v-img class="ma-2 skill-icon" :src="skill.src" :title="skill.name" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserSkillsController } from '@/controllers/UserSkillsController'
import SkillInterface from '@/interfaces/SkillInterface'

@Options({
  data () {
    return {
      skills: UserSkillsController.skills
    }
  },
  mounted () {
    console.log(this.skills)
  }
})
export default class Skills extends Vue {
  skills!: Array<SkillInterface> | undefined
}
</script>

<style scoped>
.skill-icon {
  width: 28px;
  height: 28px;
  cursor: help;
}
</style>
