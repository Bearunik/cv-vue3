<template>
  <h1>{{ $t('studies') }}</h1>
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserStudies } from '@/controllers/UserInfosController'
import StudyInterface from '@/interfaces/StudyInterface'

@Options({
  data () {
    return {
      studies: UserStudies.studies
    }
  }
})
export default class Studies extends Vue {
  studies!: Array<StudyInterface> | undefined
}
</script>
