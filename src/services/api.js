import request from '../utils/request'

/**
 * 获取测试题目
 * @param {Number} id 测试套题的id
 */
export async function fetchClassifyQues(id) {
  return request({
    url: '/api/speech/get-classify',
    data: {
      id
    }
  })
}

/**
 * 测试开始前获取本次测试id
 * @param {Number} id 测试套题的id
 */
export async function fetchClassifyId(id) {
  return request({
    url: '/api/speech/start-classify',
    method: 'POST',
    data: { id },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 音频上传打分接口
 * @param {String} path 音频文件的url
 * @param {Number} testId 本次测试的id
 * @param {Number} index 本次测试题目的序号
 * @param {String} text 题目文本
 */
export async function classify(path, testId, index, text) {
  return request(
    {
      url: '/api/speech/classify',
      filePath: path,
      name: 'voice',
      formData: {
        id: testId,
        idx: index,
        text: text
      }
    },
    'uploadFile'
  )
}

/**
 * 获取本次测试的结果
 * @param {Number}} testId 本次测试的id
 */
export async function fetchClassifyResult(testId) {
  return request({
    url: '/api/speech/classify-results',
    data: {
      id: testId
    }
  })
}
