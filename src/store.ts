import axios, { AxiosRequestConfig } from 'axios'
import { Commit, createStore } from 'vuex'

const asyncAndRequest = async (url: string, mutationName: string, commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
  const { data } = await axios(url, config)
  if (extraData) {
    commit(mutationName, { data, extraData })
  } else {
    commit(mutationName, { data })
  }
}

const store = createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: {
      name: '',
      email: '',
      isLogin: false
    }
  },
  mutations: {
    login(state, payload) {
      const { token, name, email } = payload.data
      state.user.name = name
      state.user.email = email
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login(state, payload) {
      return asyncAndRequest('/login', 'login', state.commit, { method: 'post', data: payload })
    },
    register(state, payload) {
      return asyncAndRequest('/register', 'register', state.commit, { method: 'post', data: payload })
    }
  },
  getters: {

  }
})

export default store
