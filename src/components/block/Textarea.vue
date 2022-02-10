<template>
  <div
    ref="richTextRef"
    class="cc-textarea mb-4"
    @dblclick="dblclick"
    v-html="isEdit ? originalText : markedText"
    :contenteditable="isEdit"
    :class="!isOpen ? `fix-height ` : ``"
  ></div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, PropType, ref } from '@vue/runtime-core'
import { inject } from 'vue'
import useMarkDown from '../../hooks/useMarkdown'
import { blockkey, blockData } from './type'

export default defineComponent({
  name: 'cc-textarea',
  props: {
    itemData: Object as PropType<blockData>
  },
  setup(props, context) {
    const isOpen = inject(blockkey)
    const isEdit = ref(false)
    const richTextRef = ref<null | HTMLElement>(null)

    const { originalText, markedText } = useMarkDown(
      props.itemData?.content || ''
    )
    const dblclick = () => {
      isEdit.value = !isEdit.value

      if (isOpen) {
        isOpen.value = !isOpen.value
      }
      if (!isEdit.value && richTextRef.value) {
        originalText.value = (richTextRef.value as HTMLElement).innerHTML
      }
    }
    onMounted(() => {
      if (isOpen) {
        isOpen.value = (richTextRef.value as HTMLElement).scrollHeight <= 200
      }
    })
    return { isOpen, isEdit, originalText, markedText, richTextRef, dblclick }
  }
})
</script>

<style>
.cc-textarea {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* -webkit-line-clamp: 8; */
  overflow: hidden;
}

.fix-height {
  height: 200px;
}

[contenteditable]:focus {
  outline: none;
}
</style>
