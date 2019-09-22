import React, {Component} from 'react'

import input from './dialog/InputDialog'

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
    input.show({
      onOk: (val)=>{
        alert(val)
      }
    })
  }
}

export default App