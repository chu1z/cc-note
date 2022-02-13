<template>
  <cc-container>
    <cc-aside :width="`30%`" style="padding: 20px">
      <div class="my-3 h5">
        <i class="fa fa-user-o text-body" />
        chu
      </div>
      <div
        class="d-flex justify-content-between mb-3 text-center text-secondary"
      >
        <div>
          <small class="my-5">Note</small>
          <h5>98</h5>
        </div>
        <div>
          <small class="my-5">Tag</small>
          <h5>98</h5>
        </div>
        <div>
          <small class="my-5">Day</small>
          <h5>98</h5>
        </div>
      </div>
      <div class="mb-3" style="height: 170px; background-color: #f7f7f7"></div>
      <div>
        <cc-foldtag>
          <cc-foldtag-item :tag="`编程`" :isSelect="true"></cc-foldtag-item>
          <cc-foldtag-item :tag="`编程`"></cc-foldtag-item>
          <cc-foldtag-item :tag="`编程`"></cc-foldtag-item>
        </cc-foldtag>
      </div>
    </cc-aside>
    <cc-main style="overflow-y: hidden">
      <div class="d-flex justify-content-between align-items-center">
        <div class="h1">Note</div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
      </div>
      <cc-block :isEdit="true" :canClick="false" :minHeight="50">
        <cc-block-edit>
          <cc-rich-text class="flex-grow-1" />
          <template v-slot:editBtn>
            <div class="align-self-end">
              <button type="button" class="btn btn-sm bg-info bg-opacity-25">
                发&nbsp;&nbsp;&nbsp;送
              </button>
            </div>
          </template>
        </cc-block-edit>
      </cc-block>
      <cc-content-list :contents="testData"></cc-content-list>
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
