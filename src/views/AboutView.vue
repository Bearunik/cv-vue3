<template>
  <div class="about">
    <About/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import About from '@/components/About.vue' // @ is an alias to /src

@Options({
  components: {
    About
  }
})
export default class HomeView extends Vue {}
</script>
