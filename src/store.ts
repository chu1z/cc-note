import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: { isLogin: false }
  }
})

export default store
