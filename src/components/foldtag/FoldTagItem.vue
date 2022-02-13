<template>

    <div class="cc-foldtag-item my-1 bg-opacity-25" :class="classObj">
      <i class="fa fa-hashtag mx-2"></i>
      {{ tag }}
    </div>

</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-foldtag-item',
  props: {
    tag: String,
    isSelect: Boolean
  },
  setup(props) {
    const classObj = props.isSelect ? ['bg-info', 'rounded-1'] : []
    return { classObj }
  }
})
</script>

<style>
.cc-foldtag-item {
  line-height: 2rem;
  opacity: 0.75;
}
</style>
