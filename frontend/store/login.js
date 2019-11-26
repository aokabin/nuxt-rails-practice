export const state = {
  email: '',
  password: '',
  key: ''
}

export const mutations = {
  setKey: (state, data) => {
    state.key = data.key
  }
}

export const actions = {
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
