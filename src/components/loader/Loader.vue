<template>
  <teleport to="#back">
    <div
      class="
        d-flex
        flex-column
        justify-content-center
        align-items-center
        h-100
        w-100
        text-center
        cc-loading-container
      "
      :style="{ backgroundColor: background || '' }"
    >
      <div
        class="spinner-grow text-info"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="visually-hidden">{{ text || "loading" }}</span>
      </div>
      <div v-if="text" class="text-info">{{ text }}</div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-loading-container',
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup() {
    const node = document.createElement('div')
    node.id = 'back'
    document.body.appendChild(node)
    onUnmounted(() => {
      document.body.removeChild(node)
    })
  }
})
</script>

<style>
.cc-loading-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
}
</style>
