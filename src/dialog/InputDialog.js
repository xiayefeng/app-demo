import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'


class InputDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    const {onOk} = this.props
    return (
      <div className="dialog-wrap">
        <div className="dialog-mask" />
        <div className="dialog-box">
          <input type="text" value={this.state.value} onChange={(e) => {
            this.setState({
                value: e.target.value
              }
            )
          }}/>
          <button onClick={
            (e) => {
              onOk(this.state.value)
              this.setState({
                value: ''
              })
              inp.hide()
            }
          }>提交
          </button>
        </div>
      </div>
    )
  }
}

let node = null
const inp = {
  show(obj){
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<InputDialog onOk={obj.onOk}/>, node)
  },
  hide(){
    if(node){
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
  }
}

export default inp
