<template>
  <ccContainer>
    <cc-aside :width="`30%`"></cc-aside>
    <cc-main>
      <cc-block v-for="item in testData" :key="item.id" :id="item.id">
        <cc-block-header :message="new Date(item.time).toLocaleString()"></cc-block-header>
        <span class="badge bg-info mb-2">#{{item.tag}}</span>
        <ccTextarea :itemData="item" />
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

import { testData } from '../test'
export default defineComponent({
  components: {
    ccMain,
    ccAside,
    ccContainer,
    ccBlock,
    ccBlockHeader,
    ccTextarea
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
