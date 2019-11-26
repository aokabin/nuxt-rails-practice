import { Login } from '../lib/backend-client'

export const actions = {
  login: ({ state }, { email, password }) => {
    const param = {
      email,
      password
    }
    const loginService = Login(param)
    return loginService
  }
}
