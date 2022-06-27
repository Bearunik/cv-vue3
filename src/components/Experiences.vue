<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('experiences') }}</v-card-title>
    <v-card-text>
      <ExpandedList :list="formatedExperiences" openAtStart />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserExperiencesController } from '@/controllers/UserExperiencesController'
import { Item, ItemList, SubItem } from '@/interfaces/ItemList'
import ExpandedList from '@/components/ExpandedList.vue'
import i18n from '@/i18n'
import ExperenceInterface, {
  experienceType
} from '@/interfaces/ExperienceInterface'

@Options({
  components: { ExpandedList },
  data () {
    return {
      experiences: UserExperiencesController.experiences
    }
  },
  computed: {
    formatedExperiences (): ItemList {
      const list = { items: [] } as ItemList
      this.experiences.forEach((experience: ExperenceInterface) => {
        const subItems = [] as Array<SubItem>
        experience.todo.forEach((todo) => {
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
          title: experience.title,
          subtitle: this.getTypeName(experience.type),
          color: experience.color,
          subitems: subItems,
          icon:
            experience.type === experienceType.ALTERNATELY
              ? 'mdi-school'
              : 'mdi-briefcase'
        } as Item)
      })
      return list
    }
  },
  methods: {
    getTypeName (type: number): string {
      return i18n.global.t(experienceType[type].toLowerCase())
    }
  }
})
export default class Skills extends Vue {
  experiences!: Array<ExperenceInterface> | undefined
}
</script>
