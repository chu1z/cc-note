<template>
  <div class="cc-area" :style="styleObj" ref="areaRef">
    <slot />
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-area',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  setup(props) {
    const areaRef = ref(null)
    const styleObj = reactive({
      width: props.width,
      //   height: (document.body.clientHeight - 150) + 'px',
      position: 'relative'
    })
    onMounted(() => {
      if (areaRef.value) {
        // styleObj.height = (areaRef.value as HTMLElement).clientHeight + 'px'
        console.log((areaRef.value as HTMLElement))
      }
    })
    return { styleObj, areaRef }
  }
})
</script>

<style>
</style>
