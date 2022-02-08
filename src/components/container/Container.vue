<template>
  <section class="cc-container container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script lang='ts'>
import { computed, defineComponent } from '@vue/runtime-core'
import { Component, VNode } from 'vue'

export default defineComponent({
  props: {
    direction: String
  },
  setup(props, context) {
    const slots = context.slots
    const isVertical = computed(() => {
      if (slots && slots.default) {
        return slots.default().some((vn: VNode) => {
          const tag = (vn.type as Component).name
          return tag === 'cc-header' || tag === 'cc-flooter'
        })
      } else {
        return props.direction === 'vertical'
      }
    })

    return { isVertical }
  }
})
</script>

<style scoped>
.cc-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.is-vertical {
  flex-direction: column;
}
</style>
