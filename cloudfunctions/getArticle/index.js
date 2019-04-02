// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const content = event.content
  const db = wx.cloud.database()
  db.collection('content').doc('1').get({
    success(res) {
      // res.data 包含该记录的数据
      console.log(res.data)
    }
  })
  return {
    event
  }
}