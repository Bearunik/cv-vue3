<template>
  <v-app-bar color="primary" density="compact">
    <v-toolbar-title>MITH CV</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/" class="ml-3 mr-3">
      {{ $t('home') }}
    </router-link>
    <router-link to="/about" class="ml-3 mr-3">
      {{ $t('about') }}
    </router-link>
    <v-avatar class="ml-3">
      <v-img
        src="https://picsum.photos/512/128?image=660"
        alt="Bearunik"
        :aspect-ratio="1"
        cover
      ></v-img>
    </v-avatar>
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
a .v-btn {
  text-transform: initial;
}
a.router-link-exact-active {
  text-decoration: underline;
  color: white;
}
</style>
