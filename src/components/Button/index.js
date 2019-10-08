import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './index.scss'

class Button extends Component{
  static propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'primary'
  }

  render(){
    const {
      type,
      icon,
      classes,
      children,
      ...props
    } = this.props
    return (
      <button className={`button ${type}-btn ${classes}`} {...props} >
        {icon && <Icon name={icon} />}
        {children}
      </button>
    )
  }
}

export default Button