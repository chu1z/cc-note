<template>
  <input
    ref="input"
    class="form-control"
    @blur="validate"
    @input="updateValue"
    v-model="inputRef"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { emitter } from '../../emitter'

export default defineComponent({
  name: 'cc-input',
  props: {
    modelValue: String,
    prop: String
  },
  setup(props, context) {
    const inputRef = ref('')

    // const inputEle = ref(null)

    const validate = () => {
      // TODO onblur 会触发多次
      // if (inputEle.value) { (inputEle.value as HTMLInputElement).blur() }
      emitter.emit('validate', props.prop)
    }

    const updateValue = (e: Event) => {
      inputRef.value = (e.target as HTMLInputElement).value
      context.emit('update:modelValue', inputRef.value)
    }

    return { inputRef, updateValue, validate }
  }
})
</script>

<style>
</style>
