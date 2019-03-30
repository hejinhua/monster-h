import Taro, { Component } from '@tarojs/taro'
import { Block, View } from '@tarojs/components'
import { wxGetSetting } from '../../services/wechat'
import AuthorizationModal from '../../components/AuthorizationModal'
import One from '../../components/One'
import Loading from '../../components/Loading'

import styles from './index.module.css'

export default class Index extends Component {
  config = {
    disableScroll: true
  }
  state = {
    isFetching: true,
    showModal: false
  }
  async componentWillMount() {
    const authInfo = await wxGetSetting()
    // 判断是否拥有获取用户信息权限
    if (!authInfo.authSetting['scope.userInfo']) {
      this.setState({
        isFetching: false,
        showModal: true
      })
    } else {
      const userInfo = await Taro.getUserInfo() // 获取用户
      Taro.setStorageSync('userInfo', userInfo)
      this.login()
    }
  }

  login = async () => {
    await wx.cloud.init()
    await wx.cloud.callFunction({
      name: 'login',
      success(res) {
        Taro.setStorageSync('openid', res.result.openid)
      }
    })
    this.setState({
      isFetching: false
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
    this.login()
  }

  render() {
    const { isFetching, showModal } = this.state
    return (
      <Block>
        {isFetching ? (
          <Loading />
        ) : (
          <View className={styles.index}>
            <One />
            {showModal && <AuthorizationModal onCloseModal={this.closeModal} />}
          </View>
        )}
      </Block>
    )
  }
}
