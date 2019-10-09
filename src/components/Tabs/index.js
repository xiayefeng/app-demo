import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TabPane from './TabPane'
import './index.scss'

class Tabs extends Component{
  static TabPane = TabPane

  static propTypes = {
    defaultActiveKey: PropTypes.string
  }

  static defaultProps = {
    defaultActiveKey: '1'
  }



  render(){
    const {children, ...rest} = this.props
    return(
      <div className="tabs-wrap">
        {children}
      </div>
    )
  }
}
