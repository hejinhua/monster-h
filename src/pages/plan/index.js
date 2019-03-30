import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCalendar } from 'taro-ui'

import styles from './index.module.css'

export default class Plan extends Component {
  state = {}
  async componentWillMount() {}

  render() {
    return (
      <View className={styles.plan}>
        <AtCalendar />
      </View>
    )
  }
}
