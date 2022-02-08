<template>
  <header
    class="cc-header"
    :style="{ height }"
  >
    <slot />
  </header>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-header',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})
</script>

<style scoped>
.cc-header {
  padding: 0 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color:rgb(26, 11, 12,0.1);
}
</style>
