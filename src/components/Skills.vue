<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('skills') }}</v-card-title>
    <v-card-text>
      <div v-for="(skill, skillIndex) in skills" v-bind:key="skillIndex">
        {{ skill.name }}
      </div>
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
  }
})
export default class Skills extends Vue {
  skills!: Array<SkillInterface> | undefined
}
</script>
