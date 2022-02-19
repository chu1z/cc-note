import axios, { AxiosRequestConfig } from 'axios'

import { Commit, createStore } from 'vuex'

const asyncAndRequest = async (url: string, mutationName: string, commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
  const { data } = await axios(url, config)

  if (extraData) {
    commit(mutationName, { data, extraData })
  } else {
    commit(mutationName, { data })
  }

  return new Promise((resolve, reject) => {
    if (data.code === 1) {
      resolve(data)
    } else {
      reject(data)
    }
  })
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
    loginOrRegister(state, payload) {
      const { code, data } = payload.data
      if (code === 1) {
        const { token, name, email } = data
        state.token = token
        state.user.name = name
        state.user.email = email
        state.user.isLogin = true
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = token
      }
    },
    getUserInfo(state, payload) {
      const { code, data } = payload.data
      if (code === 1) {
        const { name, email } = data
        state.user.name = name
        state.user.email = email
        state.user.isLogin = true
      } else {
        state.token = ''
        state.user = {
          name: '',
          email: '',
          isLogin: false
        }
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
      }
    }
  },
  actions: {
    login(state, payload) {
      return asyncAndRequest('/login', 'loginOrRegister', state.commit, { method: 'post', data: payload })
    },
    register(state, payload) {
      return asyncAndRequest('/register', 'loginOrRegister', state.commit, { method: 'post', data: payload })
    },
    getUserInfo(state, payload) {
      return asyncAndRequest('/userinfo', 'getUserInfo', state.commit)
    }
  },
  getters: {

  }
})

export default store
