<template>
  <h1>{{ $t('project.version') }}</h1>
  <p>{{ version }}</p>
  <h1>{{ $t('project.dependencies') }}</h1>
  <v-table>
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import packageInfos from '@/config/packagesInfos.json'

@Options({
  data () {
    return {
      version: packageInfos.version,
      dependencies: packageInfos.dependencies
    }
  },
  methods: {
    open (url: string) {
      window.open(url)
    }
  }
})
export default class HelloWorld extends Vue {}
</script>

<style scoped></style>
