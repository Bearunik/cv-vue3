<template>
  <v-app class="pa-4">
    <main class="app-container rounded-xl elevation-10">
      <Header class="app-header rounded-t-xl" />
      <v-content class="app-content">
        <router-view />
      </v-content>
      <Footer class="rounded-b-xl" />
    </main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

@Options({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style scoped>
.v-application {
  background: lightgray;
}
main {
  background: white;
}
.app-header {
  padding-bottom: 100px;
  position: absolute;
  width: 100%;
}
.app-content {
  position: relative;
  margin-top: 200px;
  display: block;
}
</style>
