import request from '@/utils/axios'

export const loginByUserName = (username, password, code, randomStr) =>{
    const data = {
        username,
        password
    }
    return request({
        url:'',
        method:'post',
        data
    })
}
export function getUserInfo(token) {
    return request({
      url: '',
      method: 'get',
      params: { token }
    })
  }