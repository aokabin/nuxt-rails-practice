export const state = {
  email: '',
  password: '',
  key: ''
}

export const mutations = {
  setLoginData: (state, params) => {
    state.email = params.email
    state.password = params.password
  },
  setKey: (state, data) => {
    state.key = data.key
  }
}

export const actions = {
  login: ({ commit, state, dispatch }) => {
    return new Promise(function(resolve, reject) {
      const api = dispatch(
        'backend/login',
        {
          email: state.email,
          password: state.password
        },
        { root: true }
      )

      api.then((resp) => {
        commit('setKey', resp.data)
      })
      api.catch((error) => {
        console.log('get netstatus got error', error)
      })
    })
  }
}

export const getters = {
  accessKey: (state) => {
    return state.key
  }
}
