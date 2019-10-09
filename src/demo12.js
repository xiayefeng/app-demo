import React, { Component } from 'react'
import Input from '@/components/Input'
import Table from '@/components/Table'
import MyComponent from './demo13'

let dataSource = [
  {
    name: 'xiaoyu', age: 32, sex: '男', id: 0
  },
  {
    name: 'ji', age: 22, sex: '男', id: 1
  },
  {
    name: 'bb', age: 28, sex: '女', id: 2
  },
  {
    name: 'gg', age: 26, sex: '男', id: 3
  }
]

class App extends Component{
  constructor (props){
    super(props)
    this.state = {
      value: '',
      value2: ''
    }
  }
  render(){
    const {value, value2} = this.state
    return (
      <>
        <Input value={value} onChange={e => {
          this.setState({
            value: e.target.value
          })
        }}/>
        <br/>
        <Input type="text" defaultValue={value2} onChange={e => {
          /*this.setState({
            value: e.target.value
          })*/
        }} />
        <Table columns={[
          {title: '姓名', dataIndex: 'name', key: 'name', render(item, index, key){
            return (
              <td key={key}>
                <a href="#">{item[key]}</a>
              </td>
            )
            }},
          {title: '年龄', dataIndex: 'age', key: 'age'},
          {title: '性别', dataIndex: 'sex', key: 'sex'}
        ]} dataSource={dataSource} />
        <MyComponent />
      </>
    )
  }
}

export default App

