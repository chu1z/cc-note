import { App } from 'vue'
import Alert from './Alert.vue'

export default {
  install(app:App) {
    app.component(Alert.name, Alert)
  }
}
