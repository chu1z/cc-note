<template>
  <aside class="cc-aside" :style="{ width }" >
    <slot />
  </aside>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-aside',
  props: {
    width: {
      type: String,
      default: '160px'
    }
  }
})
</script>

<style>
.cc-aside{
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
