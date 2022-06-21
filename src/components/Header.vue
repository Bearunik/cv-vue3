<template>
  <v-card color="primary" class="rounded-b-0 elevation-0">
    <div class="d-flex px-6 py-4">
      <div class="pa-2 mr-auto">MITH CV</div>
      <router-link to="/" class="ml-3 pa-2" outlined tile>
        {{ $t('home') }}
      </router-link>
      <router-link to="/about" class="ml-3 pa-2" outlined tile>
        {{ $t('about') }}
      </router-link>
      <v-avatar class="ml-3 elevation-5" outlined tile>
        <v-img
          src="https://picsum.photos/512/128?image=660"
          alt="Bearunik"
          :aspect-ratio="1"
          cover
        ></v-img>
      </v-avatar>
    </div>
  </v-card>
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
}
</style>
