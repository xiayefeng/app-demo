import React from 'react'
import EventComponent from './components/EventComponent'

import './index.scss'


class List extends EventComponent{
  constructor (props){
    super(props)
    this.state = {
      data: [
        {name: 'a', id: 0},
        {name: 'b', id: 1},
        {name: 'c', id: 2},
      ]
    }
  }

  render(){
    return (
      <div>
        {this.state.data.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    )
  }
  clear(){
    this.setState({
      data: []
    })
  }
  add(name){
    let arr = this.state.data
    arr.push({name, id: arr.length})
    this.setState({
      data: arr
    })
  }
}

class Action extends EventComponent{
  constructor (props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.value} onChange={(e) => {this.setState({value: e.target.value})}} />
        <button onClick={() => {
          this.trigger('add', this.state.value)
          this.setState({
            value: ''
          })
        }}>Add</button>
      </div>
    )
  }
}

class App extends EventComponent{
  render(){
    return (
      <div className="work-box">
        <Action ref='action'/>
        <List ref='list'/>
      </div>
    )
  }
  componentDidMount(){
    let listInstance = this.refs.list
    let actionInstance = this.refs.action
    actionInstance.on('add', (name) => {
      listInstance.add(name)
    })
    window.app = this
  }
}

export default App