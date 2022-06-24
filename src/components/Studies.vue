<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('studies') }}</v-card-title>
    <v-card-text>
      <v-expansion-panels variant="accordion" multiple="true" v-model="panel">
        <v-expansion-panel
          v-for="(study, studyIndex) in studies"
          v-bind:key="studyIndex"
          elevation="0"
          eager="true"
          ripple
        >
          <v-expansion-panel-title :class="{ 'pt-0': studyIndex == 0 }">
            <div
              class="py-2 px-4 rounded-pill text-white"
              :style="{ 'background-color': study.color }"
            >
              <strong>{{ study.title }}</strong>
              <v-icon icon="mdi-school" class="ml-5"></v-icon>
            </div>
            <div
              class="py-3 px-4 pl-12 rounded-pill study-type"
              :style="{ 'background-color': getBgRbga(study.color) }"
            >
              <strong :style="{ color: study.color }">
                {{ $t(getTypeName(study.type)) }}
              </strong>
            </div>
            <v-icon
              :icon="
                panel.includes(studyIndex)
                  ? 'mdi-chevron-down'
                  : 'mdi-chevron-up'
              "
              :color="study.color"
              class="study-chevron"
            ></v-icon>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div
              v-for="(studTodo, studyTodoIndex) in study.todo"
              v-bind:key="studyTodoIndex"
            >
              <strong>{{ studTodo.title }}</strong>
              <div
                v-for="(studTodoTask, studyTodoTaskIndex) in studTodo.tasks"
                v-bind:key="studyTodoTaskIndex"
              >
                <i>- {{ studTodoTask }}</i>
              </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserStudiesController } from '@/controllers/UserStudiesController'
import StudyInterface, { studyType } from '@/interfaces/StudyInterface'
import { getBgRbga } from '@/tools/color'
import i18n from '@/i18n'

@Options({
  data () {
    return {
      studies: UserStudiesController.studies,
      panel: []
    }
  },
  mounted () {
    this.openPanels()
  },
  methods: {
    getBgRbga (color: string): string {
      return getBgRbga(color)
    },
    getTypeName (type: number): string {
      return i18n.global.t(studyType[type].toLowerCase())
    },
    openPanels () {
      const array = []
      for (let index = 0; index < this.studies.length; index++) {
        array.push(index)
      }
      this.panel = array
    }
    // closePanel (panelId: number) {
    //   this.panel
    // }
  }
})
export default class Studies extends Vue {
  studies!: Array<StudyInterface> | undefined
}
</script>

<style scoped>
.v-expansion-panel button {
  padding-left: 0;
  padding-right: 0;
  min-height: auto;
  background: white;
  color: white;
  box-shadow: 0;
  border: 0;
  border-radius: 0;
}

.study-chevron {
  position: absolute;
  z-index: 1;
  right: 0;
}

.study-type {
  margin-left: -30px;
}
</style>
