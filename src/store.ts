import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {
      name: 'chu',
      isLogin: true
    }

  }
})

export default store
