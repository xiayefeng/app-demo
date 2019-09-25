import React, {Component} from 'react'

class LoadingComponent extends Component{
  state = {
    ...super.state, loading: false
  }
  render(){
    const {loading} = this.state
    return (
      <div className="loading-box">
        {loading &&<LoadingMask/>}
        {super.render()}
      </div>
    )
  }
  showLoading = () => {this.setState({loading: true})}
  hideLoading = () => {this.setState({loading: false})}
}

class Article extends LoadingComponent{
  render(){
    return (
      <div>
        article
      </div>
    )
  }
  componentDidMount(){
    this.showLoading()
  }
}