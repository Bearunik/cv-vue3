<template>
  <form
    @submit.prevent="submited"
    class="d-flex align-center w-100 rounded-lg"
    :class="{ 'elevation-2': isFocused || isHovering }"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <button v-if="icon !== ''">
      <v-icon :icon="icon" color="grey" />
    </button>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="value"
      class="rounded-lg pa-2 w-100"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    icon: {
      default: '',
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      value: '',
      isHovering: false,
      isFocused: false
    }
  },
  methods: {
    submited (): void {
      if (this.value !== '') {
        this.$emit('submited', this.value)
        this.value = ''
      }
    }
  }
})
export default class InputText extends Vue {}
</script>

<style scoped>
form {
  position: relative;
}
input[type='text'] {
  outline: none;
  color: black;
  caret-color: black;
  background: white;
}

button {
  position: absolute;
  right: 6px;
  background: white;
}
</style>
