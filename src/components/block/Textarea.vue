<template>
  <div
    ref="richTextRef"
    class="cc-textarea mb-2"
    @dblclick="dblclick"
    v-html="blockData && blockData.isEdit ? originalText : markedText"
    :contenteditable="blockData && blockData.isEdit"
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
    const blockData = inject(blockkey)

    const richTextRef = ref<null | HTMLElement>(null)

    const { originalText, markedText } = useMarkDown(
      props.itemData?.content || ''
    )

    const dblclick = () => {
      if (blockData && blockData.canClick) {
        blockData.isOpen = !blockData.isOpen
        blockData.isEdit = !blockData.isEdit
        if (!blockData.isEdit && richTextRef.value) {
          originalText.value = (richTextRef.value as HTMLElement).innerHTML
        }
      }
    }

    const classObj = computed(() => {
      return {
        'fix-height': !blockData?.isMax && !blockData!.isOpen
        // 'cc-textarea-edit': blockData!.isEdit
      }
    })

    onMounted(() => {
      if (blockData) {
        blockData.isMax =
          (richTextRef.value as HTMLElement).scrollHeight <= 200
      }
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
  /* -webkit-line-clamp: 8; */
  overflow: hidden;
  height: 100%;
}

.fix-height {
  height: 200px;
}

[contenteditable]:focus {
  outline: none;
}
</style>
