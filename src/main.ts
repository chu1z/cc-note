import { createApp } from 'vue'
import App from './App.vue'

import alert from './components/alert'
import block from './components/block'
import container from './components/container'
import dropdown from './components/dropdown'
import form from './components/form'

import router from './router'

const app = createApp(App)

app.use(alert)
  .use(block)
  .use(container)
  .use(dropdown)
  .use(form)

app.use(router)
app.mount('#app')
