import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'

import MemoForm from '../../components/MemoForm'
import MemoCard from '../../components/MemoCard'

import pizzaIcon from '../../assets/icons/strawberry.png'
import styles from './index.module.css'

export default class Me extends Component {
  state = {
    showMemoForm: false,
    data: {
      image: "https://college.bczcdn.com/wapp-res/common/imgs/WechatIMG50-1553926241870.jpeg",
      title: 'Lorem Ipsum',
      content: 'autem consectetur voluptate facere at, omnis ab optio placeat officiis!Animi modi harum enim quia veniam consectetur unde autem inventore.',
      date: '2019/3/30'
    }
  }
  componentWillMount() {
    this.openid = Taro.getStorageSync('openid')
    wx.cloud.init()
    this.db = wx.cloud.database()
    this.db.collection('content').where({
      _openid: this.openid
    }).get().then(res => {
      this.setState({
        dataList: res.data
      })
    })
  }

  handleConfirm = data => {
    this.toogleMemoForm()
  }

  toogleMemoForm = () => {
    // this.setState({
    //   showMemoForm: !this.state.showMemoForm
    // })
    this.db.collection('content').add({
      data: {
        content: {
          image: 'https://college.bczcdn.com/wapp-res/common/imgs/bg-1553760237469.jpeg',
          title: 'test',
          content: 'lalal',
          date: '2019.3.18'
        }
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  clickMemoCard = async id => {
    Taro.navigateTo({
      url: `/pages/article/index?id=${id}`
    })
  }

  render() {
    const { dataList, showMemoForm } = this.state
    return (
      <View className={styles.me}>
        <View className={styles.addBtn} onClick={this.toogleMemoForm}>
          <Image src={pizzaIcon} className={styles.pizza} />
        </View>
        <View className={styles.content}>
          {dataList.map((item, index) => (
            <MemoCard key={index} data={item.content} onClick={this.clickMemoCard.bind(this, item._id)} />))}
        </View>
        {showMemoForm && <MemoForm onSubmit={this.handleConfirm} onReset={this.toogleMemoForm} />}
      </View>
    )
  }
}
