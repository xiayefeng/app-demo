import React, {Component} from 'react'
import loading from './loading/loading'
// import input from './dialog/InputDialog'

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
    loading.show()
    setTimeout(() => {
      loading.hide()
    }, 2000)
    /*input.show({
      onOk: (val)=>{
        alert(val)
      }
    })*/
  }
}

export default App
