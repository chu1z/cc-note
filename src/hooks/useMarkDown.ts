import { computed, ref } from 'vue'
import { marked } from 'marked'
import { replaceBr, replaceN } from '../utils/utils'

function useMarkDown(text: string) {
  const originalText = ref(replaceN(text))

  const markedText = computed(() => marked(replaceBr(originalText.value)))

  return { originalText, markedText }
}

export default useMarkDown
