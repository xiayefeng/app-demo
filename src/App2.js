import React from 'react'
import './App.css'
import Icon from './components/Icon'

class App extends React.Component{
  render(){
    return (
      <div className="my-icon">
        <Icon name="wodeshoucang" data-id="2" onClick={e => {
          let node = e.target
          if(e.target.tagName !== 'svg') {
            node = e.target.parentNode
          }
          console.log(node.dataset)
        }} />
        <Icon name="zengjia" />
      </div>
    )
  }
}

export default App