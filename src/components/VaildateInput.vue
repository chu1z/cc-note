<template>
  <input
    class="form-control"
    @blur="validate"
    @input="updateValue"
    v-model="inputRef"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { emitter } from '../emitter'

export default defineComponent({
  name: 'cc-input',
  props: {
    modelValue: String,
    prop: String
  },
  setup (props, context) {
    const inputRef = ref('')

    const validate = () => {
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
