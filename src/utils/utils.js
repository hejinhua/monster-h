export const baseCDNUrl = 'https://college.bczcdn.com/' // CDN URL前缀
export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://wapp-college.baicizhan.com/' : 'https://qa-college.baicizhan.com/' // 接口URL前缀

// 英文月份
export const englishMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

/**
 * 判断一个字符串是否是Url
 * @param {String} str
 */
const isUrl = str => {
  const pattern = /^(https?|tmp):\/\//
  return pattern.test(str)
}

/**
 * 处理URL的方法
 * @param {String} url
 * @param {String} type api: 前缀为接口; cdn: 前缀为CDN(默认值)
 */
export const handleUrl = (url, type = 'cdn') => {
  if (isUrl(url)) return url
  if (!url) return ''
  switch (type) {
    case 'api':
      return baseUrl + url
    case 'cdn':
      return baseCDNUrl + url
    default:
      return url
  }
}
