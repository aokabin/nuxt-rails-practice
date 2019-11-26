import axios from 'axios'
export const request = (method, url, body) => {
  method = method.toLowerCase()
  return axios[method](url, body)
}

export const Login = function(parameters = {}) {
  const domain = 'http://localhost:3001'
  const path = '/login'
  const body = parameters
  return request('post', domain + path, body)
}
