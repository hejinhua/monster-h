import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtInput, AtTextarea } from 'taro-ui'

import pizzaIcon from '../../assets/icons/pizza.png'

import styles from './index.module.css'

export default class Article extends Component {
  state = {
    data: {
      title: '',
      content: '',
      image: '',
      date: ''
    },
    type: 'look'
  }
  componentWillMount() {
    this.id = parseInt(this.$router.params.id)
    wx.cloud.init()
    this.db = wx.cloud.database()
    this.db.collection('content').where({
      id: this.id
    }).get().then(res => {
      const data = res.data[0].content
      this.setState({
        data: {
          ...data
        }
      })
    })
  }

  toogleMemoForm = () => {
    this.setState({
      type: 'edit'
    })
  }

  handleChange = e => {
    this.setState({
      data: {
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const { data: { title, content, image }, type } = this.state
    return (
      <View className={styles.root}>
        <View className={styles.addBtn} onClick={this.toogleMemoForm}>
          <Image src={pizzaIcon} className={styles.pizza} />
        </View>
        {type === 'look' && (<Block>
          <Image src={image} className={styles.image} />
          <View className={styles.container}>
            <Text className={styles.title}>{title}</Text>
            <Text className={styles.content}>{content}</Text>
          </View>
        </Block>)}
        {type === 'edit' && (<View style={{ width: '100%' }}>
          <AtInput
            name='title'
            type='text'
            value={title}
            onChange={this.handleChange.bind(this)}
            className={styles.inputTitle}
          />
          <AtTextarea
            name='content'
            type='text'
            value={title}
            maxLength={5000}
            onChange={this.handleChange.bind(this)}
            className={styles.inputContent}
          />
        </View>)}
      </View>
    )
  }
}
