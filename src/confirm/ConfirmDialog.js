import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

import './index.scss'

class ConfirmDialog extends Component {
  static defaultProps = {
    title: '提示',
    confirm(){
      confirmSource.hide()
    }
  }
  static propTypes = {
    title: PropTypes.string,
    confirm: PropTypes.func,
    content: PropTypes.string.isRequired
  }

  render () {
    const {confirm, title, content} = this.props
    return (
      <div className="dialog-wrap">
        <div className="dialog-mask" />
        <div className="dialog-box">
          <div className="dialog-header">
            <span className="dialog-title">{title}</span>
            <span className="close-btn" onClick={e => {
              confirmSource.hide()
            }} />
          </div>
          <div className="dialog-body">
            {content}
          </div>
          <div className="dialog-footer">
            <button className="btn" onClick={event => confirmSource.hide()}>取消</button>
            <button className="sure-btn btn" onClick={ event => {
              confirm()
              confirmSource.hide()
            }}>确定</button>
          </div>
        </div>
      </div>
    )
  }
}

let node = null

const confirmSource = {
  show(obj){
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<ConfirmDialog content={obj.content} title={obj.title} confirm={obj.confirm}/>, node)
  },
  hide(){
    if(node){
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
  }
}

export default confirmSource

