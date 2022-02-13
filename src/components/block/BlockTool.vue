<template>
  <div class="cc-block-tool" @click.prevent="onClick">
    {{ message }}<i class="fa" :class="classObj"></i>
  </div>
</template>

<script>
import { computed, defineComponent, inject } from '@vue/runtime-core'
import { blockkey } from './type'

export default defineComponent({
  name: 'cc-block-tool',
  setup() {
    const blockData = inject(blockkey)

    const classObj = computed(() => {
      return {
        'fa-angle-double-down': !blockData.isOpen,
        'fa-angle-double-up': blockData.isOpen
      }
    })

    const message = computed(() => {
      return blockData.isOpen ? '收起 ' : '展开 '
    })

    const onClick = () => {
      blockData.isOpen = !blockData.isOpen
    }

    return { classObj, onClick, message }
  }
})
</script>

<style>
.cc-block-tool {
  color: #9d9d9d;
  width: 50px;
  font-size: 12px;
  text-decoration: none;
  background-color: #efefef;
  padding: 2px 6px;
  border-radius: 3px;
}
</style>
