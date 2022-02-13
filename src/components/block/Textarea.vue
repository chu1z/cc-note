<template>
  <div
    ref="richTextRef"
    class="cc-textarea mb-2"
    @dblclick="dblclick"
    v-html="blockData.isEdit ? originalText : markedText"
    :contenteditable="blockData.isEdit"
    :class="classObj"
  ></div>
</template>

<script lang='ts'>
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref
} from '@vue/runtime-core'
import { inject } from 'vue'
import useMarkDown from '../../hooks/useMarkdown'
import { blockkey, BlockData } from './type'

export default defineComponent({
  name: 'cc-textarea',
  props: {
    itemData: Object as PropType<BlockData>
  },
  setup(props, context) {
    const richTextRef = ref<null | HTMLElement>(null)

    const { originalText, markedText } = useMarkDown(
      props.itemData?.content || ''
    )

    const blockData = inject(blockkey)

    if (blockData === undefined) {
      throw new Error('Object cannot be empty')
    }

    const dblclick = () => {
      if (blockData.canClick) {
        blockData.isEdit = !blockData.isEdit
        blockData.isOpen = blockData.needOpen && blockData.isEdit

        if (!blockData.isEdit && richTextRef.value) {
          originalText.value = (richTextRef.value as HTMLElement).innerHTML
        }
      }
    }

    const classObj = computed(() => {
      return {
        'cc-textarea-need-open': blockData.needOpen && !blockData.isOpen
      }
    })

    onMounted(() => {
      blockData.needOpen =
        (richTextRef.value as HTMLElement).scrollHeight > 200
    })
    return {
      blockData,
      originalText,
      markedText,
      richTextRef,
      dblclick,
      classObj
    }
  }
})
</script>

<style>
.cc-textarea {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: scroll;
  min-height: inherit;
}

.cc-textarea-need-open {
  height: 200px;
  overflow: hidden;
}
</style>
