<template>
  <div class="home">
    <v-img
      alt="Vue logo"
      :src="require('../assets/logo.png')"
      class="my-3"
      contain
      height="200"
    />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {}
</script>
