import { App } from 'vue'
import Aside from './Aside.vue'
import Container from './Container.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Main from './Main.vue'

export default {
  install(app:App) {
    app.component(Aside.name, Aside)
    app.component(Container.name, Container)
    app.component(Footer.name, Footer)
    app.component(Header.name, Header)
    app.component(Main.name, Main)
  }
}
