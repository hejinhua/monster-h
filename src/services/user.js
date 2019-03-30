import request from '../utils/request'

export async function accountLogin(code) {
  return request({
    url: '/auth/login',
    header: {
      code
    }
  })
}

export async function supplyUid(encryptedData, iv) {
  return request({
    url: '/auth/supply-uid',
    method: 'POST',
    data: {
      encryptedData,
      iv
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
