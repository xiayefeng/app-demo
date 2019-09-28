import React, {Component} from 'react'
import ReactDOM from 'react-dom'

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
    <div>
      app

    </div>
  }
  componentDidMount(){
    this.showLoading()
  }
}