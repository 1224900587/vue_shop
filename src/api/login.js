import request from '@/lib/request'
/**
 *
 * @param {*} data
 * @returns promise
 */
export const login = data => {
  return request.request({ method: 'post', url: '/users/login', params: data })
}

export const register = data => {
  return request.post('/user', data)
}
