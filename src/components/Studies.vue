<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('studies') }}</v-card-title>
    <v-card-text>
      <ExpandedList :list="formatedStudies" openAtStart />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserStudiesController } from '@/controllers/UserStudiesController'
import StudyInterface, { studyType } from '@/interfaces/StudyInterface'
import { Item, ItemList, SubItem } from '@/interfaces/ItemList'
import ExpandedList from '@/components/ExpandedList.vue'
import i18n from '@/i18n'

@Options({
  components: { ExpandedList },
  data () {
    return {
      studies: UserStudiesController.studies
    }
  },
  computed: {
    formatedStudies (): ItemList {
      const list = { items: [] } as ItemList
      this.studies.forEach((study: StudyInterface) => {
        const subItems = [] as Array<SubItem>
        study.todo.forEach((todo) => {
          const tasks = [] as Array<string>
          todo.tasks.forEach((task) => {
            tasks.push(task)
          })
          subItems.push({
            title: todo.title,
            descriptions: tasks
          })
        })

        list.items.push({
          title: study.title,
          subtitle: this.getTypeName(study.type),
          color: study.color,
          subitems: subItems,
          icon: 'mdi-school'
        } as Item)
      })
      return list
    }
  },
  methods: {
    getTypeName (type: number): string {
      return i18n.global.t(studyType[type].toLowerCase())
    }
  }
})
export default class Studies extends Vue {
  studies!: Array<StudyInterface> | undefined
}
</script>
