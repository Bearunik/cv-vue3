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
  },
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
})
export default class App extends Vue {
  icons!: Array<string>
}
</script>
