<template>
  <h1>{{ $t('experiences') }}</h1>
  <div v-for="(experience, ExpIndex) in experiences" v-bind:key="ExpIndex">
    <strong>{{ experience.title }}</strong>
    <div
      v-for="(expTodo, ExpTodoIndex) in experience.todo"
      v-bind:key="ExpTodoIndex"
    >
      {{ expTodo.title }}
      <div
        v-for="(expTodoTask, expTodoTaskIndex) in expTodo.tasks"
        v-bind:key="expTodoTaskIndex"
      >
        <i>- {{ expTodoTask }}</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserExperiences } from '@/controllers/UserInfosController'
import ExperenceInterface from '@/interfaces/ExperienceInterface'

@Options({
  data () {
    return {
      experiences: UserExperiences.experiences
    }
  }
})
export default class Skills extends Vue {
  experiences!: Array<ExperenceInterface> | undefined
}
</script>
