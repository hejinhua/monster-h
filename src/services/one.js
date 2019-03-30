import Taro from '@tarojs/taro'

/**
 * 获取token 和 cookie
 */
let cookie = ''

async function retrieveTokenAndCookie() {
  try {
    const res = await Taro.request({
      url: 'http://m.wufazhuce.com/one',
      responseType: 'text'
    })
    cookie = res.header['Set-Cookie']
    let token = res.data.split("One.token = '")[1].split("'")[0]
    if (token && token.length === 40) {
      return token
    }
  } catch (err) {
    throw err
  }
}

export async function retrieveOneData(page = 0) {
  const token = await retrieveTokenAndCookie()
  let url = 'http://m.wufazhuce.com/one/ajaxlist/' + page + '?_token=' + token
  try {
    const res = await Taro.request({
      url,
      header: {
        Cookie: cookie
      }
    })
    return res.data
  } catch (err) {
    throw err
  }
}
