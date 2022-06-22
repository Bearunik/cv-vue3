<template>
  <v-card class="mb-5 elevation-3">
    <v-card-title class="text-primary">
      {{ $t('project.version') }}
    </v-card-title>
    <v-card-text>{{ version }}</v-card-text>
  </v-card>
  <v-card class="elevation-3">
    <v-card-title class="text-primary">
      {{ $t('project.dependencies') }}
    </v-card-title>
    <v-card-text
      ><v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Version</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in dependencies" :key="i" :value="item">
            <td>{{ i }}</td>
            <td>{{ item.version }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import packageInfos from '@/configs/packagesInfos.json'

@Options({
  data () {
    return {
      version: packageInfos.version,
      dependencies: packageInfos.dependencies
    }
  }
})
export default class Project extends Vue {}
</script>
