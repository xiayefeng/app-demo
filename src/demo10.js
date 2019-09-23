import React, { Component } from 'react'

class Action extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    const {onAdd} = this.props
    return (
      <div>
        <input type="text" value={this.state.value} onChange={e => {
          this.setState({
            value: e.target.value
          })
        }}/>
        <button onClick={e => {
          onAdd(this.state.value)
          this.setState({
            value: ''
          })
        }}>提交
        </button>
      </div>
    )
  }
}

class TodoList extends Component {
  render () {
    const {data, onDelete} = this.props
    return (
      <div>
        {data.map((item, index) => (
          <div>
            <p>{item}</p>
            <button onClick={ e => {
              onDelete(index)
            }}>删除</button>
          </div>
        ))}
      </div>
    )
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render () {
    return (
      <div>
        <Action onAdd={name => {
          let data = this.state.data
          data.push(name)
          this.setState({data})
        }}/>
        <TodoList
          data={this.state.data}
          onDelete={index => {
            let data = this.state.data
            data.splice(index, 1)
            this.setState({data})
          }}
        />
      </div>
    )
  }
}