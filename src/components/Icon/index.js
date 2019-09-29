import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '@/assets/font/iconfont.js'
import '@/assets/font/iconfont.css'


function MyIcon(props) {
  const {type, name, classes, ...rest} = props
  if (type === 'svg') {
    return (
      <svg className={`icon ${classes}`} aria-hidden="true" {...rest}>
        <use xlinkHref={`#icon-${name}`} />
      </svg>
    )
  } else {
    return (
      <span className={`iconfont icon-${name} ${classes}`} {...rest} />
    )
  }
}

class Icon extends Component{
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'svg'
  }

  render(){
    const {type, name, classes, ...props} = this.props
    return (
      <MyIcon classes={classes} type={type} name={name} {...props} />
    )
  }
}

export default Icon
