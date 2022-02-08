<template>
    <div class="container">
        <cc-form class="cc-form">
            <cc-form-item class="mb-4">
                <h2 class="text-center">CC-Note</h2>
            </cc-form-item>
            <cc-form-item :prop="`username`" :label="`昵 称`">
                <cc-input
                    type="input"
                    placeholder="请输入昵称"
                    v-model="model.username"
                    :prop="`username`"
                ></cc-input>
            </cc-form-item>
            <cc-form-item :prop="`email`" :label="`邮 箱`">
                <cc-input type="email" placeholder="请输入邮箱" v-model="model.email" :prop="`email`"></cc-input>
            </cc-form-item>
            <cc-form-item :prop="`password`" :label="`密 码`">
                <cc-input
                    type="password"
                    placeholder="请输入密码"
                    v-model="model.password"
                    :prop="`password`"
                ></cc-input>
            </cc-form-item>
            <template v-slot:sumbit>
                <div class="d-grid" gap-2>
                    <button class="btn btn-primary">注册</button>
                </div>
            </template>
        </cc-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from '@vue/runtime-core'

import ccForm from '../components/form/Form.vue'
import ccFormItem from '../components/form/FormItem.vue'
import ccInput from '../components/form/VaildateInput.vue'
import { key, RuleProp } from '../components/form/type'

export default defineComponent({
  components: {
    ccForm,
    ccFormItem,
    ccInput
  },
  setup () {
    const model = reactive({
      username: '',
      email: '',
      password: ''
    })
    const rules = reactive({
      username: [
                { type: 'required', message: '昵称不能为空！' } as RuleProp
      ],
      email: [
                { type: 'required', message: '邮箱不能为空！' } as RuleProp,
                { type: 'email', message: '邮箱格式不正确！' } as RuleProp
      ],
      password: [
                { type: 'required', message: '密码不能为空！' } as RuleProp
      ]
    })

    provide(key, {
      model, rules
    })
    return {
      model
    }
  }
})
</script>

<style scoped>
.cc-form {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
