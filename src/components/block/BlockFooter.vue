<template>
  <div
    class="cc-textarea-footer d-flex justify-content-between mb-2"
    v-if="isShow"
  >
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent, inject } from '@vue/runtime-core'
import { blockkey } from './type'
export default defineComponent({
  name: 'cc-block-footer',
  setup() {
    const blockData = inject(blockkey)
    const isShow = computed(() => !(blockData && blockData.isMax))
    return { isShow }
  }
})
</script>

<style>
.cc-textarea-footer {
  position: absolute;
  bottom: 0;
}
</style>
