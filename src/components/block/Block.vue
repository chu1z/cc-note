<template>
  <div
    ref="blockRef"
    class="cc-block p-3 mb-2 bg-body rounded"
    :class="[isEnter ? `shadow ` : `shadow-sm`]"
    @mouseenter="enter"
    @mouseleave="leave"
  >
    <slot />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-block',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    const isEnter = ref(false)
    const blockRef = ref<null | HTMLElement>(null)
    const enter = () => {
      isEnter.value = true
    }
    const leave = () => {
      isEnter.value = false
    }
    return { enter, leave, isEnter, blockRef }
  }
})
</script>

<style scoped>
.cc-block {
  position: relative;
}
</style>
