import { App } from 'vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'
import VaildateInput from './VaildateInput.vue'

export default {
  install(app:App) {
    app.component(Form.name, Form)
    app.component(FormItem.name, FormItem)
    app.component(VaildateInput.name, VaildateInput)
  }
}
