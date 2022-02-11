<template>
  <cc-container>
    <cc-aside :width="`30%`"></cc-aside>
    <cc-main style="overflow-y: hidden">
      <cc-block :isEdit="true" :canClick="false" :height="150">
        <ccTextarea />
        <cc-block-edit class="d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-sm bg-info bg-opacity-50">
            发&nbsp;&nbsp;&nbsp;送
          </button>
        </cc-block-edit>
      </cc-block>
      <cc-area style="overflow-y: scroll">
        <cc-block v-for="item in testData" :key="item.id" :canClick="true">
          <cc-block-header>
            <small class="text-black-50">{{
              new Date(item.time).toLocaleString()
            }}</small>
            <cc-drop-down>
              <template v-slot:control>
                <i class="fa fa-bars"></i>
              </template>
              <cc-drop-down-item disabled
                ><a href="#" class="dropdown-item">编辑</a></cc-drop-down-item
              >
              <cc-drop-down-item
                ><a href="#" class="dropdown-item">删除</a></cc-drop-down-item
              >
            </cc-drop-down>
          </cc-block-header>
          <span class="badge bg-info mb-1">#{{ item.tag }}</span>
          <ccTextarea :itemData="item" />
          <cc-block-tool />
          <cc-block-edit class="d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-sm bg-dark bg-opacity-10">
              取&nbsp;&nbsp;&nbsp;消
            </button>
            <button type="button" class="btn btn-sm bg-info bg-opacity-50">
              发&nbsp;&nbsp;&nbsp;送
            </button>
          </cc-block-edit>
        </cc-block>
      </cc-area>
    </cc-main>
  </cc-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import ccMain from '../components/container/Main.vue'
import ccAside from '../components/container/Aside.vue'
import ccContainer from '../components/container/Container.vue'
import ccBlock from '../components/block/Block.vue'
import ccBlockHeader from '../components/block/BlockHeader.vue'
import ccTextarea from '../components/block/Textarea.vue'
import ccDropDown from '../components/dropdown/DropDown.vue'
import ccDropDownItem from '../components/dropdown/DropDownItem.vue'
import ccBlockTool from '../components/block/BlockTool.vue'
import ccBlockEdit from '../components/block/BlockEdit.vue'
import ccArea from '../components/container/Area.vue'

import { testData } from '../test'
export default defineComponent({
  components: {
    ccMain,
    ccAside,
    ccContainer,
    ccBlock,
    ccBlockHeader,
    ccTextarea,
    ccDropDown,
    ccDropDownItem,
    ccBlockTool,
    ccBlockEdit,
    ccArea
  },
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
