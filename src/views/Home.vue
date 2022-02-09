<template>
  <ccContainer>
    <cc-aside :width="`30%`"></cc-aside>
    <cc-main>
      <cc-block v-for="item in testData" :key="item.id" :id="item.id">
        <cc-block-header :message="new Date(item.time).toLocaleString()">
          <cc-drop-down>
            <template v-slot:control>
              <i class="fa fa-bars"></i>
            </template>
            <dropdown-item disabled
              ><a href="#" class="dropdown-item">编辑资料</a></dropdown-item
            >
            <dropdown-item
              ><a href="#" class="dropdown-item">退出登陆</a></dropdown-item
            >
          </cc-drop-down>
        </cc-block-header>
        <span class="badge bg-info mb-2">#{{ item.tag }}</span>
        <ccTextarea :itemData="item" />
        <cc-block-footer>
          ssssssssss
        </cc-block-footer>
      </cc-block>
    </cc-main>
  </ccContainer>
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
import ccBlockFooter from '../components/block/BlockFooter.vue'

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
    ccBlockFooter
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
