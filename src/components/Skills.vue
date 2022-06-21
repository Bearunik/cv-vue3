<template>
  <h1>{{ $t('skills') }}</h1>
  <div v-for="(skill, skillIndex) in skills" v-bind:key="skillIndex">
    {{ skill.name }}
  </div>
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
