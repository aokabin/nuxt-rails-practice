import { Login } from '../lib/backend-client'

export const actions = {
  login: ({ state }, { email, password }) => {
    const loginService = Login({ email, password })
    return loginService
  }
}
