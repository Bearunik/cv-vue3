<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('studies') }}</v-card-title>
    <v-card-text>
      <div v-for="(study, studyIndex) in studies" v-bind:key="studyIndex">
        <strong>{{ study.title }}</strong>
        <div
          v-for="(studTodo, studyTodoIndex) in study.todo"
          v-bind:key="studyTodoIndex"
        >
          {{ studTodo.title }}
          <div
            v-for="(studTodoTask, studyTodoTaskIndex) in studTodo.tasks"
            v-bind:key="studyTodoTaskIndex"
          >
            <i>- {{ studTodoTask }}</i>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserStudiesController } from '@/controllers/UserStudiesController'
import StudyInterface from '@/interfaces/StudyInterface'

@Options({
  data () {
    return {
      studies: UserStudiesController.studies
    }
  }
})
export default class Studies extends Vue {
  studies!: Array<StudyInterface> | undefined
}
</script>
