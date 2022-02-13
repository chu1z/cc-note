<template>
  <div class="cc-block-edit d-flex flex-column" :class="classObj">
    <slot></slot>
    <slot name="openBtn" v-if="isShowOpenBtn"></slot>
    <slot name="editBtn" v-if="isShowEditBtn"></slot>
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

    if (blockData === undefined) {
      throw new Error('Object cannot be empty')
    }

    const classObj = computed(() => {
      return {
        'cc-textarea-edit': blockData.isEdit
      }
    })

    const isShowEditBtn = computed(() => {
      return blockData.isEdit
    })

    const isShowOpenBtn = computed(() => {
      return blockData.needOpen && !blockData.isEdit
    })

    return { classObj, isShowEditBtn, isShowOpenBtn }
  }
})
</script>

<style>
.cc-textarea-edit {
  font-size: 14px;
  padding: 10px 15px;
  color: #323232;
  /* background: rgb(255, 255, 255,0.75); */
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  width: 100%;
  min-height: inherit;
  max-height: 500px;
}
</style>
