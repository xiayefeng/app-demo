import React, {Component} from 'react'

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      name: 'react'
    }
  }
  render(){
    console.log('App render')
    return (
      <div>
        {this.state.name}
        {this.state.name && <Sonl name={this.state.name + '-sonl'} /> }
      </div>
    )
  }
  componentDidMount(){
    window.app = this
    console.log('APP mount')
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('APP will update')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('APP did update')
  }

  componentWillUnmount(){
    console.log('APP unmount')
  }
}

class Sonl extends Component{
  render(){
    console.log('sonl render')
    return (
      <div>
        {this.props.name}
         <GrendSonl name={this.props.name + '-grandsonl'} />
      </div>
    )
  }
  componentDidMount(){
    console.log('sonl mount')
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('sonl will update')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('sonl did update')
  }
  componentWillUnmount(){
    console.log('Sonl unmount')
  }
}

class GrendSonl extends Component{
  render(){
    console.log('GrendSonl render')
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
  componentDidMount(){
    console.log('GrendSonl mount')
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('GrendSonl will update')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('GrendSonl did update')
  }
  componentWillUnmount(){
    console.log('GrendSonl unmount')
  }
}

export default App