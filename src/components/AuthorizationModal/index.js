// 处理用户授权弹框

import Taro, { PureComponent } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Button } from '@tarojs/components'

import './index.scss'

class AuthorizationModal extends PureComponent {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired
  }

  handleAuthorize = res => {
    if (res.detail.errMsg === 'getUserInfo:ok') {
      Taro.setStorageSync('userInfo', res.detail)
      this.props.onCloseModal()
    }
  }

  render() {
    return (
      <View className='root'>
        <View className='container'>
          <View className='title'>用户信息授权</View>
          <View className='content'>何方小怪物需要获取用户的头像和昵称</View>
          <Button className='btn' open-type='getUserInfo' onGetUserInfo={this.handleAuthorize}>
            确认授权
          </Button>
        </View>
      </View>
    )
  }
}

export default AuthorizationModal
