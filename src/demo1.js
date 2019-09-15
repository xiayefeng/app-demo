import React, {Component, PureComponent} from 'react'

class Item extends PureComponent{
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }

  componentWillUpadate(pravProps, prevState) {
    console.log(this.props.name, 'update')
  }

  componentDidMount() {
    console.log(this.props.name, 'mount')
  }

  componentWillUnmount() {
    console.log(this.props.name, 'unmount')
  }
}

class List extends Component{
  render(){
    return (
      <div>
        {this.props.list.map(item => <Item key={item} name={item}/>)}
      </div>
    )
  }
}

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      list: [
        'react',
        'vue',
        'angular'
      ]
    }
  }
  render() {
    return(
      <div>
        <List list={this.state.list}/>
      </div>
    )
  }
  componentDidMount(){
    window.app = this
  }
}

export default App