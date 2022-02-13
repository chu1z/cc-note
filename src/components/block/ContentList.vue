<template>
  <div style="overflow-y: scroll" class="cc-content-list" :style="styleObj">
    <cc-block v-for="item in contents" :key="item.id" :canClick="true">
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
          <span class="badge bg-info opacity-75">#{{ item.tag }}</span>
        </div>
        <cc-rich-text :itemData="item" />
        <template v-slot:openBtn>
          <cc-block-tool />
        </template>
        <template v-slot:editBtn>
          <div class="align-self-end">
            <button type="button" class="btn btn-sm bg-dark bg-opacity-10 mx-2">
              取&nbsp;&nbsp;&nbsp;消
            </button>
            <button type="button" class="btn btn-sm bg-info bg-opacity-25">
              发&nbsp;&nbsp;&nbsp;送
            </button>
          </div>
        </template>
      </cc-block-edit>
    </cc-block>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'
import { onMounted, PropType, reactive } from 'vue'
import { BlockDatas } from './type'

export default defineComponent({
  name: 'cc-content-list',
  props: {
    contents: { type: Array as PropType<BlockDatas>, required: true }
  },
  setup() {
    const styleObj = reactive({
      width: '100%',
      height: '100%'
    })
    onMounted(() => {
      // TODO 这个值要处理
      styleObj.height =
        document.documentElement.clientHeight - 150 - 24 - 52 + 'px'
    })
    return { styleObj }
  }
})
</script>

<style>
</style>
