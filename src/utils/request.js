import Taro from '@tarojs/taro'

const codeMessage = {
  400: '请求错误',
  401: '用户没有权限(令牌、用户名、密码错误)',
  403: '禁止访问',
  404: 'Not Found',
  406: '请求格式错误',
  410: '资源已被永久删除',
  500: '服务器异常',
  502: '网关异常',
  503: '服务不可用',
  504: '网关超时'
}

function checkStatus(response) {
  if (response.statusCode >= 200 && response.statusCode < 300) {
    return response
  }
  const errorText = codeMessage[response.statusCode] || response.errMsg
  const error = new Error(errorText)
  error.status = response.statusCode
  error.response = response
  throw error
}

/**
 * 发出请求，返回一个Promise
 * @param {Object} options
 * @param {Function} method 1: Taro.request(默认) 2: Taro.uploadFile
 */
export default function(options, method = Taro.request) {
  let { url, header } = options
  // url = handleUrl(url, 'api')
  return method({
    ...options,
    url,
    header
  })
    .then(checkStatus)
    .then(res => res)
}
