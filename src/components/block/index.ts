import { App } from 'vue'
import Block from './Block.vue'
import BlockEdit from './BlockEdit.vue'
import BlockHeader from './BlockHeader.vue'
import BlockTool from './BlockTool.vue'
import BlockRichText from './BlockRichText.vue'
import ContentList from './ContentList.vue'

export default {
  install(app:App) {
    app.component(Block.name, Block)
    app.component(BlockEdit.name, BlockEdit)
    app.component(BlockHeader.name, BlockHeader)
    app.component(BlockRichText.name, BlockRichText)
    app.component(BlockTool.name, BlockTool)
    app.component(ContentList.name, ContentList)
  }
}
