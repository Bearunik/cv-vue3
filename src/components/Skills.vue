<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('skills') }}</v-card-title>
    <v-card-text>
      <v-row
        v-for="(category, categoryIndex) in skills"
        v-bind:key="categoryIndex"
        :class="{ 'mb-5': categoryIndex + 1 < skills.length }"
        no-gutters
      >
        <v-col>
          {{ getCategoryName(categoryIndex) }}
          <v-row>
            <v-img
              v-for="(skill, skillIndex) in category"
              v-bind:key="skillIndex"
              class="ma-2 skill-icon"
              :src="skill.src"
              :title="skill.name"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { UserSkillsController } from '@/controllers/UserSkillsController'
import SkillInterface, { skillCategory } from '@/interfaces/SkillInterface'
import { groupByObject } from '@/tools/array'
import i18n from '@/i18n'

@Options({
  computed: {
    skills () {
      return groupByObject(UserSkillsController.skills, 'category')
    }
  },
  methods: {
    getCategoryName (category: number): string {
      return i18n.global.t(skillCategory[category].toLowerCase())
    }
  }
})
export default class Skills extends Vue {
  skills!: Array<SkillInterface> | undefined
}
</script>

<style scoped>
.skill-icon {
  width: 28px;
  height: 28px;
  cursor: help;
}
</style>
