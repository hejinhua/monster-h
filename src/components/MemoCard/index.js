import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import styles from './index.module.css'

export default class Memocard extends Taro.Component {

  handleClick = () => {
    this.props.onClick(this.props.data)
  }
  render() {
    const { title, content, date, image } = this.props.data
    return (
      <View className={styles.root} onClick={this.handleClick}>
        <Image src={image} className={styles.image} />
        <View className={styles.container}>
          <View className={styles.title}>{title}</View>
          <View className={styles.content}>{content}</View>
          <View className={styles.date}>{date}</View>
        </View>
      </View>
    )
  }
}
