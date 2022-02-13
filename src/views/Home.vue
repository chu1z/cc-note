<template>
  <cc-container>
    <cc-aside :width="`30%`"></cc-aside>
    <cc-main class="flex-cloumn" style="overflow-y: hidden">
      <div class="d-flex justify-content-between align-items-center">
        <div class="h1">Notes</div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
      </div>
      <cc-block :isEdit="true" :canClick="false" :minHeight="50">
        <cc-block-edit>
          <cc-textarea class="flex-grow-1" />
          <template v-slot:editBtn>
            <div class="align-self-end">
              <button type="button" class="btn btn-sm bg-info bg-opacity-50">
                发&nbsp;&nbsp;&nbsp;送
              </button>
            </div>
          </template>
        </cc-block-edit>
      </cc-block>
      <cc-area style="overflow-y: scroll">
        <cc-block v-for="item in testData" :key="item.id" :canClick="true">
          <cc-block-header class="justify-content-between align-items-center">
            <small class="text-black-50">{{
              new Date(item.time).toLocaleString()
            }}</small>
            <cc-dropdown>
              <template v-slot:control>
                <i class="fa fa-bars"></i>
              </template>
              <cc-dropdown-item disabled>
                <a href="#" class="dropdown-item">编辑</a>
              </cc-dropdown-item>
              <cc-dropdown-item>
                <a href="#" class="dropdown-item">删除</a>
              </cc-dropdown-item>
            </cc-dropdown>
          </cc-block-header>
          <cc-block-edit>
            <div class="mb-2">
              <span class="badge bg-info">#{{ item.tag }}</span>
            </div>
            <cc-textarea :itemData="item" />
            <template v-slot:openBtn>
              <cc-block-tool />
            </template>
            <template v-slot:editBtn>
              <div class="align-self-end">
                <button
                  type="button"
                  class="btn btn-sm bg-dark bg-opacity-10 mx-2"
                >
                  取&nbsp;&nbsp;&nbsp;消
                </button>
                <button type="button" class="btn btn-sm bg-info bg-opacity-50">
                  发&nbsp;&nbsp;&nbsp;送
                </button>
              </div>
            </template>
          </cc-block-edit>
        </cc-block>
      </cc-area>
    </cc-main>
  </cc-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

import { testData } from '../test'
export default defineComponent({
  setup() {
    return { testData }
  }
})
</script>

<style scoped>
.cc-container {
  height: 100%;
  width: 880px;
}
</style>
