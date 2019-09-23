import React, {Component} from 'react'
import confirmSource from './confirm/ConfirmDialog'

class App extends Component{
  render(){
    return(
      <div>
        app
      </div>
    )
  }
  componentDidMount(){
    console.log('app mounted')
    confirmSource.show({
      confirm(){
        console.log('点击确定按钮')
      },
      content: '确定执行删除操作吗？'
    })
  }
}

export default App
