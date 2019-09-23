import React, {Component} from 'react'
import message from './message/MessageBox'

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
    message.show({
      msg: '删除成功！',
      duration: 1500
    })
  }
}

export default App
