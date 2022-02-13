<template>
  <div class="cc-main">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-main'
})
</script>

<style scoped>
.cc-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow:auto;
  box-sizing: border-box;
  padding: 20px;
}
</style>
