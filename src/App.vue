<template>
  <v-app>
    <v-app-bar
      color="primary"
      density="compact"
    >
      <v-toolbar-title>MITH CV</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/"><v-btn variant="text">Home</v-btn></router-link>
      <router-link to="/about"><v-btn variant="text">About</v-btn></router-link>
      <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      color="primary"
      class="d-flex flex-column"
    >
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 text-white"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>
      <div class="text-white pt-0">MITH CV</div>
      <v-divider></v-divider>
      <div class="text-white">
        {{ new Date().getFullYear() }} — <strong>Mickaël THERAUD</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header a {
  text-decoration: none;
  color: #2c3e50;
}

header a.router-link-exact-active {
  color: #42b983;
}
</style>
