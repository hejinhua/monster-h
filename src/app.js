import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import 'taro-ui/dist/style/index.scss'
import Index from './pages/index'
import './app.scss'

class App extends Component {
  config = {
    pages: ['pages/me/index', 'pages/plan/index', 'pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#FF8C00',
      navigationBarTitleText: '何方小怪物',
      navigationBarTextStyle: 'black'
    },
    networkTimeout: {
      request: 20000,
      uploadFile: 20000,
      downloadFile: 20000
    },
    tabBar: {
      color: '#9b9b9b',
      selectedColor: '#FF8C00',
      backgroundColor: '#fff',
      list: [
        {
          text: 'Plan',
          pagePath: 'pages/plan/index',
          iconPath: './assets/icons/avocado.png',
          selectedIconPath: './assets/icons/avocado.png'
        },
        {
          text: 'ONE',
          pagePath: 'pages/index/index',
          iconPath: './assets/icons/doughnut.png',
          selectedIconPath: './assets/icons/doughnut.png'
        },
        {
          text: 'Memo',
          pagePath: 'pages/me/index',
          iconPath: './assets/icons/hotdog.png',
          selectedIconPath: './assets/icons/hotdog.png'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {
    console.log('catch error')
  }

  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
