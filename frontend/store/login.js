export const state = {
  email: '',
  password: '',
  key: '',
  session: false
}

export const mutations = {
  setKey: (state, data) => {
    state.key = data.key
  }
}

export const actions = {
  check: (commit, dispatch) => {
    return new Promise(function(resolve, reject) {
      const api = dispatch(
        'backend/check',
        { root: true }
      )

      api.then((resp) => {
        commit('setKey', resp.data)
      })
      api.catch((error) => {
        console.log('got error', error)
      })
    })
  },
  login: ({ commit, dispatch }, { email, password }) => {
    return new Promise(function(resolve, reject) {
      const api = dispatch(
        'backend/login',
        {
          email,
          password
        },
        { root: true }
      )

      api.then((resp) => {
        commit('setKey', resp.data)
      })
      api.catch((error) => {
        console.log('got error', error)
      })
    })
  }
}

export const getters = {
  accessKey: (state) => {
    return state.key
  }
}
