import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './loading/index.css'

class Loading extends Component{
  render() {
    return (
      <div className="loading">
        <div className="loading_msk"></div>
        <div className="loading_content">
          loading
        </div>
      </div>
    )
  }
}

let node = null
const loading = {
  show(){
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Loading/>, node)
  },
  hide() {
    if(node){
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
  }
}