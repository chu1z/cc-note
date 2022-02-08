<template>
  <div class="cc-textarea fs-6">
    <pre
      class="form-control cc-textarea-edit"
      v-if="isEdit"
      contenteditable="true"
    >{{originalText}}</pre>
    <div v-else v-html="markedText"></div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref
} from '@vue/runtime-core'
import { emitter } from '../../emitter'
import useMarkDown from '../../hooks/useMarkDown'

import { blockData } from './type'

export default defineComponent({
  name: 'cc-textarea',
  props: {
    itemData: Object as PropType<blockData>
  },
  setup(props, context) {
    const isEdit = ref(false)

    const { originalText, markedText } = useMarkDown(props.itemData?.content || '')

    onMounted(() => {
      emitter.on('double-click', (id) => {
        if (id === props.itemData?.id) {
          isEdit.value = true
        }
      })
    })

    onUnmounted(() => {
      emitter.off('double-click')
    })

    return { isEdit, originalText, markedText }
  }
})
</script>

<style>
.cc-textarea-edit {
  resize: none;
  width: 100%; /*自动适应父布局宽度*/
  overflow: auto;
  word-break: break-all;
  height: 100%;
}
</style>
