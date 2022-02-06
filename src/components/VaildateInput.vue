<template>
    <input
        class="form-control"
        @blur="validateInput"
        @input="updateValue"
        v-model="inputRef.value"
        v-bind="$attrs"
    />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  }
})
</script>

<style>
</style>
