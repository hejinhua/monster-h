import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import styles from './index.module.css'

export default class Memocard extends Taro.Component {
  render() {
    const { title, content, tips } = this.props
    return (
      <View className={styles.root}>
        <View className={styles.title}>{title}</View>
        <View className={styles.content}>{content}</View>
      </View>
    )
  }
}
