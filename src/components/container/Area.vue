<template>
  <div class="cc-area" :style="styleObj">
    <slot />
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-area',
  setup(props) {
    const styleObj = reactive({
      width: '100%',
      height: '100%'
    })
    onMounted(() => {
      // TODO 这个值要处理
      styleObj.height =
        document.documentElement.clientHeight - 150 - 24 - 52 + 'px'
    })
    return { styleObj }
  }
})
</script>

<style>
.cc-area {
  position: relative;
}
</style>
