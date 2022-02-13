<template>
  <div
    class="cc-block px-3 py-2 mb-2 bg-body rounded d-flex flex-column bg-opacity-75"
    :class="classObj"
    :style="styleObject"
    @mouseenter="enter"
    @mouseleave="leave"
  >
    <slot />
  </div>
</template>

<script lang='ts'>
import {
  computed,
  defineComponent,
  provide,
  reactive,
  ref
} from '@vue/runtime-core'
import { blockkey } from './type'

export default defineComponent({
  name: 'cc-block',
  props: {
    isOpen: Boolean,
    isEdit: Boolean,
    canClick: Boolean,
    minHeight: Number
  },
  setup(props, context) {
    const isEnter = ref(false)
    const blockState = reactive({
      needOpen: false,
      isOpen: props.isOpen,
      isEdit: props.isEdit,
      canClick: props.canClick
    })

    provide(blockkey, blockState)

    const enter = () => {
      isEnter.value = true
    }
    const leave = () => {
      isEnter.value = false
    }

    const classObj = computed(() => {
      return {
        shadow: isEnter.value,
        'shadow-sm': !isEnter.value
      }
    })

    const styleObject = {}
    if (props.minHeight) {
      Object.assign(styleObject, { 'min-height': props.minHeight + 'px' })
    }

    return { enter, leave, isEnter, classObj, styleObject }
  }
})
</script>

<style scoped>
.cc-block {
  position: relative;
}
</style>
