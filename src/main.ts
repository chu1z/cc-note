import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'

import alert from './components/alert'
import block from './components/block'
import calendar from './components/calendar'
import container from './components/container'
import dropdown from './components/dropdown'
import foldtag from './components/foldtag'
import form from './components/form'
import loader from './components/loader'

import router from './router'

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:8004'

app.use(alert)
  .use(block)
  .use(container)
  .use(dropdown)
  .use(form)
  .use(foldtag)
  .use(calendar)
  .use(loader)

app.use(router)
app.mount('#app')
