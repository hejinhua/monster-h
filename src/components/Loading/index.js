import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import loadingSVG from '../../assets/svg/loading.svg'

import styles from './index.module.css'

class Loading extends Taro.Component {
  render() {
    return (
      <View className={styles.loading}>
        <Image className={styles.image} src={loadingSVG} />
      </View>
    )
  }
}
export default Loading
