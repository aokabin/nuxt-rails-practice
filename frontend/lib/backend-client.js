import axios from 'axios'
export const request = (method, url, body) => {
  method = method.toLowerCase()
  return axios[method](url, body)
}

export const Login = function(parameters = {}) {
  const domain = 'http://localhost:3001'
  const path = '/login'
  let body
  if (parameters.body !== undefined) {
    body = parameters.body
  }
  if (parameters.body === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  return request('post', domain + path, body)
}
