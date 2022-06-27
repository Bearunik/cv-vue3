<template>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">{{ $t('skills') }}</v-card-title>
    <v-card-text>
      <v-row
        v-for="(category, categoryIndex) in skills"
        v-bind:key="categoryIndex"
        :class="{
          'mb-2': parseInt(categoryIndex) + 1 < Object.keys(skills).length
        }"
        no-gutters
      >
        <v-col>
          <v-row wrap no-gutters class="mb-2">
            <v-col cols="12" class="mb-1">
              {{ getCategoryName(categoryIndex) }}
            </v-col>
            <v-col cols="12">
              <v-divider />
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col
              v-for="(skill, skillIndex) in category"
              v-bind:key="skillIndex"
              cols="3"
            >
              <v-img
                class="ma-2 skill-icon"
                :src="skill.src"
                :title="skill.name"
                @click="openLink(skill.url)"
              />
            </v-col>
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
    },
    openLink (url: string): void {
      if (url) {
        window.open(url, '_blank')
      }
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
