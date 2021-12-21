import { App } from 'vue'

import MyContainer from './ Container.vue'
import MyHeader from './Header.vue'
import MyFooter from './Footer.vue'
import MyAside from './Aside.vue'
import MyMain from './Main.vue'

export default {
  install(app: App) {
    app.component(MyContainer.name, MyContainer)
    app.component(MyHeader.name, MyHeader)
    app.component(MyFooter.name, MyFooter)
    app.component(MyAside.name, MyAside)
    app.component(MyMain.name, MyMain)
  }
}
