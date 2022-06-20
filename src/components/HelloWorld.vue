<template>
  <div class="hello">
    <p>{{ $t('message') }}</p>
    <h1>{{ msg }}</h1>
    <div v-for="(skill, index) in skills" v-bind:key="index">
      {{ index }} {{ skill.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SkillInterface, { skillCategory } from '@/interfaces/SkillInterface'

@Options({
  props: {
    msg: String
  },
  computed: {
    skills () {
      return [
        { name: 'Jenkins', category: skillCategory.ENVIRONMENT, src: '@/assets/logo.png' },
        { name: 'Jenkins2', category: skillCategory.ENVIRONMENT, src: '@/assets/logo.png' },
        { name: 'Jenkins3', category: skillCategory.ENVIRONMENT, src: '@/assets/logo.png' },
        { name: 'Jenkins4', category: skillCategory.ENVIRONMENT, src: '@/assets/logo.png' }
      ] as Array<SkillInterface>
    }
  }
})

export default class HelloWorld extends Vue {
  msg!: string;
  skills!: Array<SkillInterface>;
}
</script>
