<template>
  <div class="cc-textarea-footer" v-if="!isOpen">
    <slot />
  </div>
</template>

<script>
import { defineComponent, inject } from '@vue/runtime-core'
import { blockkey } from './type'
export default defineComponent({
  name: 'cc-block-footer',
  setup() {
    const isOpen = inject(blockkey)

    return { isOpen }
  }
})
</script>

<style>
.cc-textarea-footer {
  position: absolute;
  bottom: 0;
}
</style>
