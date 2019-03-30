import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { retrieveOneData } from '../../services/one'
import { englishMonth } from '../../utils/utils'

import styles from './index.module.css'

export default class One extends Component {
  config = {
    disableScroll: true
  }
  state = {
    content: '',
    day: '',
    month: '',
    year: '',
    imgUrl: '',
    pictureAuthor: '',
    textAuthors: '',
    title: ''
  }
  async componentWillMount() {
    const oneData = await retrieveOneData()
    const { content, date, img_url, picture_author, text_authors, title } = oneData.data[0]
    let dateArr = date.split('/').map(item => item.trim())
    this.setState({
      content: content,
      day: dateArr[2],
      month: englishMonth[parseInt(dateArr[1]) - 1],
      year: dateArr[0],
      imgUrl: img_url,
      pictureAuthor: picture_author,
      textAuthors: text_authors,
      title: title
    })
  }

  render() {
    const { content, day, month, year, imgUrl, pictureAuthor, textAuthors, title } = this.state
    return (
      <View className={styles.one}>
        <View className={styles.titleContainer}>
          <View className={styles.date}>
            <Text className={styles.day}>{day}</Text>
            {month}.{year}
          </View>
          <View className={styles.title}>{title}</View>
        </View>
        <Image src={imgUrl} className={styles.oneImage} />
        <View className={styles.picture}>{pictureAuthor}</View>
        <View className={styles.content}>{content}</View>
        <View className={styles.picture}>{textAuthors}</View>
      </View>
    )
  }
}
