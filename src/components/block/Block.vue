<template>
  <div
    ref="blockRef"
    class="cc-block p-3 mb-2 bg-body rounded"
    :class="[isEnter ? `shadow ` : `shadow-sm`, isOpen ? `` : `max`]"
    @mouseenter="enter"
    @mouseleave="leave"
    @dblclick="dblclick"
  >
    <slot />
    <div class="cc-block-footer" v-if="!isShowAll">sssssssssadsfas</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from '@vue/runtime-core'
import { emitter } from '../../emitter'

export default defineComponent({
  name: 'cc-block',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props, context) {
    const isOpen = ref(false)
    const isEnter = ref(false)
    const blockRef = ref<null | HTMLElement>(null)
    const isShowAll = ref(true)
    const enter = () => {
      isEnter.value = true
    }
    const leave = () => {
      isEnter.value = false
    }
    const dblclick = () => {
      isOpen.value = true
      emitter.emit('double-click', props.id)
    }
    onMounted(() => {
      isShowAll.value = (blockRef.value as HTMLElement).scrollHeight <= 300
    })
    return { enter, leave, isEnter, isOpen, dblclick, isShowAll, blockRef }
  }
})
</script>

<style scoped>
.cc-block {
  display: block;
  overflow: hidden;
}
.cc-block-footer{
  position: absolute;
  bottom: 20%;
}
.max {
  max-height: 300px;
}
</style>
