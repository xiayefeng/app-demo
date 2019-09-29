import React, {Component} from 'react'
import {math} from './es6-decorator'
import Icon from '@/components/Icon'
import './es6-css.scss'

class LoadingMask extends Component{
  render(){
    return (
      <div className="mask-wrap">loading...</div>
    )
  }
}

class LoadingComponent extends Component{
  state = {
    ...super.state,
    loading: false
  }
  render(){
    const {loading} = this.state
    return (
      <div className="loading-box">
        {loading && <LoadingMask/>}
      </div>
    )
  }
  showLoading = () => {this.setState({loading: true})}
  hideLoading = () => {this.setState({loading: false})}
}

class Article extends LoadingComponent{
  render(){
    return (
      <div className="wrap">
        article
        <Icon name="huidaodingbu" style={{color: '#f00', fontSize: '24px'}} />
        <Icon name="zengjia" classes="my-add" type="classes" onClick={() => {
            console.log('click add icon')
        }} />
        {super.render()}
      </div>
    )
  }
  componentDidMount(){
    math.add(2, 4)
    this.showLoading()
    setTimeout(() => {
      this.hideLoading()
    }, 2500)
  }
}
export default Article
