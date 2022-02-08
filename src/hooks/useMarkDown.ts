import { marked } from 'marked'
import { computed, ref } from 'vue'

function useMarkDown(text: string) {
  const originalText = ref(text)
  const markedText = computed(() => marked(originalText.value))
  return { originalText, markedText }
}

export default useMarkDown
