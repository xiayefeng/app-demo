import React, {Component} from 'react'
import './index.scss'

class Action extends Component{
  constructor (props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.value} onChange={(e) => {
          this.setState({
            value: e.target.value
          })
        } } />
        <button onClick={() => {
          this.props.onAdd(this.state.value)
          this.setState({
            value: ''
          })
        }}>提交</button>
      </div>
    )
  }
}

class List extends Component{
  render(){
    return (
      <div>
        {this.props.list.map(item => (
           <p key={item.id}>{item.name}</p>
        ))}
      </div>
    )
  }
}

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      list: [
        {name: 'a', id: 0},
        {name: 'b', id: 1},
        {name: 'c', id: 2},
        ]
    }
    this.onAdd = this.onAdd.bind(this)
  }

  onAdd(name) {
    let arr = this.state.list
    arr.push({name, id: arr.length})
    this.setState({list: arr})
  }

  render(){
    return(
      <div className="work-box">
        <Action onAdd={this.onAdd}/>
        <List list={this.state.list} />
      </div>
    )
  }
}

export default App