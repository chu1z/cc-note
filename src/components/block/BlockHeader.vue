<template>
  <div class="cc-block-header d-flex justify-content-between mb-1">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-block-header'
})
</script>

<style scoped>
.fa {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
}
</style>
