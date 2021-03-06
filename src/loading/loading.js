import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

class Loading extends Component {
  render ()
  {
    return (
      <div className="loading">
        <div className="loading_msk" />
        <div className="loading_content">
          loading...
        </div>
      </div>
    )
  }
}

let node = null
const loading = {
  show ()
  {
    node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Loading/>, node)
  },
  hide ()
  {
    if (node)
    {
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
  }
}

export default loading
