import React, {Component} from 'react'

class LoadingMask extends Component{
  render(){
    return (
      <div className="mask-wrap">loading...</div>
    )
  }
}
let loading = (Com) => {
  class LoadingComponent extends Com{
    state = {
      ...super.state,
      loading: false
    }
    render(){
      const {loading} = this.state
      return (
        <div className="loading-box">
          {super.render()}
          {loading && <LoadingMask/>}
        </div>
      )
    }
    showLoading = () => {this.setState({loading: true})}
    hideLoading = () => {this.setState({loading: false})}
  }

  return LoadingComponent
}

@loading
class App extends Component{
  render(){
    return (
      <div>
        app
      </div>
    )
  }
  componentDidMount(){
    this.showLoading()
    setTimeout(() => {
      this.hideLoading()
    }, 3000)
  }
}

export default App
