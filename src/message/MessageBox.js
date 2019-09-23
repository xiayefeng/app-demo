import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import './index.scss'

class Message extends Component{
  static propTypes = {
    msg: PropTypes.string.isRequired
  }
  render ()
  {
    const {msg} = this.props
    return (
      <div className="message-wrap">
        <div className="message-mask" />
        <div className="message-content">
          {msg}
        </div>
      </div>
    )
  }
}

let node = null
const message = {
  show (obj)
  {
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Message msg={obj.msg}/>, node)
    setTimeout(() => {
      this.hide()
    }, obj.duration || 2000)
  },
  hide ()
  {
    ReactDOM.unmountComponentAtNode(node)
    document.body.removeChild(node)
  }
}

export default message
