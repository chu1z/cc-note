<template>
  <div>
    <div class="cc-fold-btn h5 my-2" @click.prevent="onClick">全部标签</div>
    <transition name="item">
      <div v-if="isShow" class="d-flex flex-column">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-foldtag',
  setup() {
    const isShow = ref(true)

    const onClick = () => {
      isShow.value = !isShow.value
    }

    return { isShow, onClick }
  }
})
</script>

<style>
.cc-fold-btn {
  line-height: 2rem;
  user-select: none;
}
.item-enter-active,
.item-leave-active {
  transition: all .5s ease;
}

.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.item-move {
  transition: transform 0.5s ease;
}
</style>
