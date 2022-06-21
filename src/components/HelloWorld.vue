<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <p>{{ $t('message') }}</p>
        <h1>{{ msg }}</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h1>{{ $t('skills') }}</h1>
        <div v-for="(skill, skillIndex) in skills" v-bind:key="skillIndex">
          {{ skillIndex }} <strong>{{ skill.name }}</strong>
        </div>
      </v-col>

      <v-col class="mb-5" cols="12">
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
      </v-col>

      <v-col class="mb-5" cols="12">
        <h1>{{ $t('experiences') }}</h1>
        <div
          v-for="(experience, ExpIndex) in experiences"
          v-bind:key="ExpIndex"
        >
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import {
  UserSkills,
  UserExperiences,
  UserStudies
} from '@/controllers/UserInfosController'
import SkillInterface from '@/interfaces/SkillInterface'
import ExperenceInterface from '@/interfaces/ExperienceInterface'
import StudyInterface from '@/interfaces/StudyInterface'

@Options({
  props: {
    msg: String
  },
  data () {
    return {
      skills: UserSkills.skills,
      experiences: UserExperiences.experiences,
      studies: UserStudies.studies
    }
  },
  mounted () {
    console.log('skills', this.skills)
    console.log('experiences', this.experiences)
    console.log('studies', this.studies)
  }
})
export default class HelloWorld extends Vue {
  msg: string | undefined
  skills!: Array<SkillInterface> | undefined
  experiences!: Array<ExperenceInterface> | undefined
  studies!: Array<StudyInterface> | undefined
}
</script>
