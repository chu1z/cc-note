<template>
  <div class="cc-block-edit b-flex mb-1" v-if="isShow">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from '@vue/runtime-core'
import { inject } from 'vue'
import { blockkey } from './type'

export default defineComponent({
  name: 'cc-block-edit',
  setup() {
    const blockData = inject(blockkey)
    const isShow = computed(() => blockData && blockData.isEdit)
    return { isShow }
  }
})
</script>

<style>
</style>
