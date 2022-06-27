<template>
  <v-expansion-panels
    v-if="list.items"
    variant="accordion"
    multiple="true"
    v-model="panel"
  >
    <v-expansion-panel
      v-for="(item, itemIndex) in list.items"
      v-bind:key="itemIndex"
      elevation="0"
      eager="true"
      ripple
    >
      <v-expansion-panel-title :class="{ 'pt-0': itemIndex == 0 }">
        <div
          class="py-2 px-4 rounded-pill text-white"
          :style="{ 'background-color': item.color }"
        >
          <strong>{{ item.title }}</strong>
          <v-icon icon="mdi-school" class="ml-5"></v-icon>
        </div>
        <div
          class="py-3 px-4 pl-12 rounded-pill item-subtitle"
          :style="{ 'background-color': getBgRbga(item.color) }"
        >
          <strong :style="{ color: item.color }">
            {{ item.subtitle }}
          </strong>
        </div>
        <v-icon
          :icon="
            panel.includes(itemIndex) ? 'mdi-chevron-down' : 'mdi-chevron-up'
          "
          :color="item.color"
          class="item-chevron"
        ></v-icon>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div
          v-for="(subItem, subItemIndex) in item.subitems"
          v-bind:key="subItemIndex"
        >
          <strong>{{ subItem.title }}</strong>
          <div
            v-for="(subItemDesc, subItemDescIndex) in subItem.descriptions"
            v-bind:key="subItemDescIndex"
          >
            <i>- {{ subItemDesc }}</i>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { getBgRbga } from '@/tools/color'
import { ItemList } from '@/interfaces/ItemList'
import { PropType } from 'vue'

@Options({
  props: {
    list: {
      type: Object as PropType<ItemList>,
      required: true
    },
    openAtStart: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      panel: []
    }
  },
  mounted () {
    if (this.openAtStart) {
      this.openPanels()
    }
  },
  methods: {
    getBgRbga (color: string): string {
      return getBgRbga(color)
    },
    openPanels () {
      const array = []
      for (let index = 0; index < this.list.items.length; index++) {
        array.push(index)
      }
      this.panel = array
    }
  }
})
export default class ExpandedList extends Vue {
  list!: ItemList
}
</script>

<style scoped>
.v-expansion-panel button {
  padding-left: 0;
  padding-right: 0;
  min-height: auto;
  background: white;
  color: white;
  box-shadow: 0;
  border: 0;
  border-radius: 0;
}

.item-chevron {
  position: absolute;
  z-index: 1;
  right: 0;
}

.item-subtitle {
  margin-left: -30px;
}
</style>
