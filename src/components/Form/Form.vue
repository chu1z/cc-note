<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="sumbit">
        <button class="btn btn-outline-primary">提交</button>
      </slot>
    </div>
    <slot name="link"></slot>
  </form>
</template>

<script lang="ts">

import { defineComponent, onUnmounted } from '@vue/runtime-core'
import { emitter } from '../../emitter'
import { ValidateFunc } from './type'

export default defineComponent({
  name: 'cc-form',
  setup (props, context) {
    const funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr
        .map((func) => func())
        .every((result) => result)
      context.emit('form-submit', result)
    }
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }

    emitter.on('form-item-created', callback)

    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })

    return {
      submitForm
    }
  }
})
</script>

<style>
</style>
