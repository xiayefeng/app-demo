import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import './index.scss'

class Input extends Component {
  state = {
    ...super.state,
    innerValue: ''
  }

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.string,
  }

  static defaultProps = {
    size: 'middle',
    type: 'text',
    placeholder: '',
  }

  get isControl () {
    return 'value' in this.props
  }

 /* get value () {
    if (this.isControl) {
      return this.props.value
    } else {
      return this.state.innerValue
    }
  }*/

  render () {
    const {
      type,
      icon,
      classes,
      value,
      defaultValue,
      placeholder,
      ...props
    } = this.props
    return (
      <>
        {this.isControl ?
        <input type={type} value={value} placeholder={placeholder} className={`primary ${classes}`} {...props} />:
        <input type={type} defaultValue={defaultValue} placeholder={placeholder}
                              className={`primary ${classes}`} {...props} />}
      </>
    )
  }

  componentDidMount () {
    this.setState({
      innerValue: this.props.defaultValue
    })
  }
}

export default Input