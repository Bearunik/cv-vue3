<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('experiences') }}</v-card-title>
    <v-card-text>
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
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserExperiencesController } from '@/controllers/UserExperiencesController'
import ExperenceInterface from '@/interfaces/ExperienceInterface'

@Options({
  data () {
    return {
      experiences: UserExperiencesController.experiences
    }
  }
})
export default class Skills extends Vue {
  experiences!: Array<ExperenceInterface> | undefined
}
</script>
