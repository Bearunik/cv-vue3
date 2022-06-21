<template>
  <h1>{{ $t('skills') }}</h1>
  <div v-for="(skill, skillIndex) in skills" v-bind:key="skillIndex">
    {{ skillIndex }} <strong>{{ skill.name }}</strong>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserSkills } from '@/controllers/UserInfosController'
import SkillInterface from '@/interfaces/SkillInterface'

@Options({
  data () {
    return {
      skills: UserSkills.skills
    }
  }
})
export default class Skills extends Vue {
  skills!: Array<SkillInterface> | undefined
}
</script>
