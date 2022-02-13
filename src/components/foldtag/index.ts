
// 折叠标签
import { App } from 'vue'
import FoldTag from './FoldTag.vue'
import FoldTagItem from './FoldTagItem.vue'

export default {
  install(app:App) {
    app.component(FoldTag.name, FoldTag)
    app.component(FoldTagItem.name, FoldTagItem)
  }
}
