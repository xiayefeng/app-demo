import React, { Component } from 'react'
import './demo10.scss'

class ShowItem extends Component{
  render ()
  {
    const {name, onDelete, onEdit, index, setName} = this.props
    return (
      <div>
        <p className="item-name">{name}</p>
        <span className="del-btn" onClick={ e => {
          onDelete(index)
        }} >删除</span>
        <span className="edit-btn"
              onClick={ event => {
                // this.setState({value: item.name})
                onEdit(index)
              }}
        >编辑</span>
      </div>
    )
  }
}

class EditItem extends Component {
  constructor (props){
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount () {
    const { name} = this.props
    this.setState({value: name})
  }

  render() {
    const {changeName, index} = this.props
    return (
      <div>
        <input value={this.state.value} onChange={(e)=> {
          this.setState({
            value: e.target.value
          })
        }} />
        <span className="complate-btn" onClick={(e) => {
          changeName(this.state.value, index)
        }
        }>完成</span>
      </div>
    )
  }
}

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
      <div className="input-box">
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
  constructor (props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render () {
    const {data, onDelete, onEdit, changeName} = this.props
    return (
      <div>
        {data.map((item, index) => (
          <div className="list-box" key={item.id}>
            {!item.isEdit && <ShowItem
              name={item.name}
              onDelete={onDelete}
              onEdit={onEdit}
              index={index}

            />}
            {item.isEdit && <EditItem changeName={changeName} index={index} name={item.name} />}

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
          data.push({name, id: +new Date(), isEdit: false})
          this.setState({data})
        }}/>
        <TodoList
          data={this.state.data}
          onDelete={index => {
            let data = this.state.data
            data.splice(index, 1)
            this.setState({data})
          }}
          onEdit={index => {
            let data = this.state.data
            data[index].isEdit = true
            this.setState({data})
          }}
          changeName={(name,  index)=> {
            let data = this.state.data
            data[index].name = name
            data[index].isEdit = false
            this.setState({data})
          }}
        />
      </div>
    )
  }
}

export default App
