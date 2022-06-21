<template>
  <v-app-bar color="primary" density="compact">
    <v-toolbar-title>MITH CV</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/"><v-btn variant="text">Home</v-btn></router-link>
    <router-link to="/about"><v-btn variant="text">About</v-btn></router-link>
    <v-img
      src="https://picsum.photos/512/128?image=660"
      height="128"
      cover
    ></v-img>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Header extends Vue {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
}
</style>
