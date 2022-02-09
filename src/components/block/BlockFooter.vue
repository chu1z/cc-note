<template>
   <div class="cc-textarea-footer">
       <slot/>
   </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'cc-block-footer'
})
</script>

<style>
.cc-textarea-footer {
  position: absolute;
  bottom: 0;
}
</style>
