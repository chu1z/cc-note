<template>
    <cc-form>
        <cc-form-item>
            <cc-input></cc-input>
        </cc-form-item>
        <cc-form-item>
            <cc-input></cc-input>
        </cc-form-item>
    </cc-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

import CCForm from '../components/Form.vue'
import CCFormItem from '../components/FormItem.vue'

import CCInput from '../components/VaildateInput.vue'
export default defineComponent({
  component: {
    CCForm,
    CCFormItem,
    CCInput
  }
})
</script>

<style>
</style>
