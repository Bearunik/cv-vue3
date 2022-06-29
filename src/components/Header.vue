<template>
  <v-card color="primary" class="rounded-b-0 elevation-0">
    <v-container class="pt-8 text-white header-container">
      <div class="mb-4">
        <v-row>
          <v-col cols="12" sm="7" class="d-flex align-center">
            <v-img
              :src="require('@/assets/bearunik.svg')"
              height="50"
              width="50"
              class="mr-2"
            />
            <InputText
              :placeholder="$t('have-question')"
              icon="mdi-magnify"
              @submit="submited"
              :style="{ size: inputSize }"
            />
            <div class="d-sm-none ml-2 header-manu-burger">
              <v-icon id="header-menu-activator" icon="mdi-menu"> </v-icon>
              <v-menu activator="#header-menu-activator" location="start">
                <v-list>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/">
                        {{ $t('home') }}
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <router-link to="/about">
                        {{ $t('about') }}
                      </router-link>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
          <v-col cols="12" sm="5" class="d-none d-sm-flex">
            <div class="d-flex justify-end align-center w-100">
              <router-link to="/" outlined tile class="mr-4">
                {{ $t('home') }}
              </router-link>
              <router-link to="/about" outlined tile class="mr-4">
                {{ $t('about') }}
              </router-link>
              <div>
                <v-img
                  :src="require('@/assets/me.jpeg')"
                  alt="Avatar"
                  width="50"
                  class="elevation-2 rounded-circle"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div>
        <h1>{{ $t('welcome') }}</h1>
        <strong>{{ $t('seeyou') }}</strong>
      </div>
    </v-container>
    <div class="bg-picture"></div>
  </v-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import InputText from '@/components/InputText.vue'
import i18n from '@/i18n'

@Options({
  data () {
    return {
      inputSize: null
    }
  },
  components: { InputText },
  methods: {
    submited (value: string): void {
      const body = 'body=' + encodeURIComponent(value)
      const subject =
        'subject=' + encodeURIComponent(i18n.global.t('mail-subject'))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.location.href = `mailto:mickael@mms-family.fr?${body}&${subject}`
    }
  }
})
export default class Header extends Vue {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
a .v-btn {
  text-transform: initial;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.header-manu-burger i {
  cursor: pointer;
}
.v-list-item a {
  color: gray;
}
img {
  max-height: 50px;
}
.header-container {
  z-index: 1;
  position: relative;
}
.bg-picture {
  background-image: url('@/assets/yggdrasil.png');
  background-size: 500px;
  background-position-x: 100%;
  background-position-y: 28px;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
