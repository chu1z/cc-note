<template>
  <div class="cc-block-header d-flex justify-content-between mb-1">
    <small class="text-black-50">{{ message }}</small>
    <i class="fa fa-bars"></i>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  props: {
    message: String
  }
})
</script>

<style scoped>
.fa {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
}
</style>
