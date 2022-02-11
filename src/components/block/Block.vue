<template>
  <div
    class="cc-block px-3 py-2 mb-2 bg-body rounded"
    :class="classObj"
    :style="styleObject"
    @mouseenter="enter"
    @mouseleave="leave"
  >
  <div :class="classObj2">
    <slot />
  </div>
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
    height: Number,
    isOpen: Boolean,
    isEdit: Boolean,
    canClick: Boolean
  },
  setup(props, context) {
    const isEnter = ref(false)
    const blockState = reactive({
      isMax: false,
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

    const classObj2 = computed(() => {
      return { 'cc-block-edit': blockState.isEdit }
    })
    const styleObject = props.height ? { height: props.height + 'px' } : ''

    return { enter, leave, isEnter, classObj, classObj2, styleObject }
  }
})
</script>

<style scoped>
.cc-block {
  position: relative;
}

.cc-block-edit {
  font-size: 14px;
  padding: 10px 15px;
  color: #323232;
  background: #fff;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  height: 100%;
}
</style>
