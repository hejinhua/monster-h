import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'

import MemoForm from '../../components/MemoForm'

import pizzaIcon from '../../assets/icons/strawberry.png'
import styles from './index.module.css'

export default class Me extends Component {
  state = {
    showMemoForm: false
  }
  async componentWillMount() {
    // const userInfo = Taro.getStorageSync('userInfo')
    // this.userInfo = {
    //   nickname: userInfo && userInfo.userInfo.nickName,
    //   avatar: userInfo && userInfo.userInfo.avatarUrl
    // }
  }

  handleConfirm = data => {
    console.log('queren', data)
    this.toogleMemoForm()
  }

  toogleMemoForm = () => {
    this.setState({
      showMemoForm: !this.state.showMemoForm
    })
  }

  render() {
    return (
      <View className={styles.me}>
        <View className={styles.addBtn} onClick={this.toogleMemoForm}>
          <Image src={pizzaIcon} className={styles.pizza} />
        </View>
        <View className={styles.content}>
          <AtList>
            <AtListItem title='标题文字' note='描述信息' />
            <AtListItem title='标题文字' note='描述信息' />
            <AtListItem title='标题文字' note='描述信息' />
          </AtList>
        </View>
        {this.state.showMemoForm && <MemoForm onSubmit={this.handleConfirm} onReset={this.toogleMemoForm} />}
      </View>
    )
  }
}
