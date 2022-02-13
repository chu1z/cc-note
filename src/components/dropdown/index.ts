import { App } from 'vue'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'

export default {
  install(app:App) {
    app.component(DropDown.name, DropDown)
    app.component(DropDownItem.name, DropDownItem)
  }
}
