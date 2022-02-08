<template>
  <footer class="cc-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-footer',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})
</script>

<style scoped>
.cc-footer {
  padding: 0 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: rgba(236, 34, 48, 0.1);
}
</style>
