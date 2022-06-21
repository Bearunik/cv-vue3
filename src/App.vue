<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
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
