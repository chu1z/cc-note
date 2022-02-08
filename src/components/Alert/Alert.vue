<template>
    <div
      class="alert alert-dismissible fade show mx-auto mt-2"
      :class="classObject"
      v-if="isVisible"
    >
      {{ message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="hide"
      ></button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { AlertType } from './type'

export default defineComponent({
  props: {
    message: String,
    type: {
      type: String as PropType<AlertType>,
      default: 'default'
    }
  },
  setup(props, context) {
    const isVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    }
    const hide = () => {
      isVisible.value = false
      context.emit('close-alert', true)
    }
    return {
      classObject,
      isVisible,
      hide
    }
  }
})
</script>

<style scoped>
.alert {
  width: 320px;
}
</style>
