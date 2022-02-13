import { App } from 'vue'
import Calendar from './Calendar.vue'

export default {
  install(app:App) {
    app.component(Calendar.name, Calendar)
  }
}
