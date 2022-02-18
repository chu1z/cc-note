<template>
  <div class="container">
    <cc-form class="cc-form" @form-submit="onFormSubmit">
      <cc-form-item class="mb-4">
        <h2 class="text-center">CC-Note</h2>
      </cc-form-item>
      <cc-form-item :prop="`email`">
        <cc-input
          type="email"
          placeholder="请输入邮箱"
          v-model="model.email"
          :prop="`email`"
        ></cc-input>
      </cc-form-item>
      <cc-form-item :prop="`password`">
        <cc-input
          type="password"
          placeholder="请输入密码"
          v-model="model.password"
          :prop="`password`"
        ></cc-input>
      </cc-form-item>
      <template v-slot:sumbit>
        <div class="d-grid" gap-2>
          <button class="btn btn-primary">登录</button>
        </div>
      </template>
      <template v-slot:link>
        <div class="d-flex justify-content-between mt-3">
          <router-link to="/register">注册账号</router-link>
          <router-link to="/">忘记密码</router-link>
        </div>
      </template>
    </cc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from '@vue/runtime-core'
import { formkey, RuleProp } from '../components/form/type'
import store from '../store'

const sha1 = require('sha1')

export default defineComponent({
  setup() {
    const model = reactive({
      email: '',
      password: ''
    })
    const rules = reactive({
      email: [
        { type: 'required', message: '邮箱不能为空!' } as RuleProp,
        { type: 'email', message: '邮箱格式不正确!' } as RuleProp
      ],
      password: [{ type: 'required', message: '密码不能为空!' } as RuleProp]
    })

    provide(formkey, {
      model,
      rules
    })

    const onFormSubmit = (result: boolean) => {
      if (result) {
        const payload = { email: model.email, password: sha1(model.password) }
        store.dispatch('login', payload)
      }
    }

    return {
      model,
      onFormSubmit
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
