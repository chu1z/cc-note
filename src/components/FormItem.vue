<template>
  <div class="form-item">
    <label v-if="label"></label>
    <slot></slot>
    <p v-if="error" class="invalid-feedback">{{ errorDesc }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, inject } from '@vue/runtime-core'
import { emailReg, key } from '../type'
import { emitter } from '../emitter'

export default defineComponent({
  name: 'cc-form-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const error = ref(false)
    const errorDesc = ref('')
    const formData = inject(key)
    const validate = () => {
      if (formData?.rules === undefined) {
        return true
      }

      const rules = formData.rules[props.prop]
      const value = formData.model[props.prop]

      if (rules) {
        const allPassed = rules.every((rule) => {
          let passed = true
          errorDesc.value = rule.message || ''
          switch (rule.type) {
            case 'required':
              passed = value.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(value)
              break
            case 'range':
              if (rule.max) {
                passed = value.length <= rule.max.length
                errorDesc.value = rule.max.message
              } else if (rule.min) {
                passed = value.length >= rule.min.length
                errorDesc.value = rule.min.message
              }
              break
          }
          return passed
        })
        error.value = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', validate)
      emitter.on('validate', () => {
        validate()
      })
    })
    return { error, errorDesc }
  }
})
</script>

<style>
</style>
