<script lang="ts">
// import './assets/reset.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<template>
  <router-view></router-view>
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  background:#e7e6e6;
}
</style>
