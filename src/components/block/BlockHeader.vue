<template>
  <div v-if="isShow" class="cc-block-header d-flex mb-1">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from '@vue/runtime-core'
import { inject } from 'vue'
import { blockkey } from './type'

export default defineComponent({
  name: 'cc-block-header',
  setup() {
    const blockData = inject(blockkey)

    const isShow = computed(() => {
      return blockData && !blockData.isEdit
    })

    return { isShow }
  }
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
