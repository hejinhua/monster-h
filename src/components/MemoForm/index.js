import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTextarea, AtForm, AtButton } from 'taro-ui'

import styles from './index.module.css'

export default class MemoForm extends Component {
  state = {
    content: ''
  }
  async componentWillMount() {}

  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }
  onSubmit = () => {
    this.props.onSubmit({ content: this.state.content })
  }
  onReset = () => {
    this.props.onReset()
  }

  render() {
    return (
      <View className={styles.mask}>
        <View className={styles.container}>
          <AtForm onSubmit={this.onSubmit} onReset={this.onReset}>
            <AtTextarea
              value={this.state.content}
              onChange={this.handleChange}
              maxLength={5000}
              placeholder='你的问题是...'
              height={800}
            />
            <AtButton formType='submit' size='small' circle>
              提交
            </AtButton>
            <AtButton formType='reset' size='small' circle>
              重置
            </AtButton>
          </AtForm>
        </View>
      </View>
    )
  }
}
