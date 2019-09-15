import React, {Component} from 'react'

class Parent extends Component{
  state = {
    msg: 'start'
  }
  transferMsg(msg) {
    this.setState({
      msg
    })
  }
  render(){
    return (
      <div>
        <p>child msg: {this.state.msg}</p>
        <Child_1 transferMsg={msg =>
          this.transferMsg(msg)
        } />
      </div>
    )
  }
}

class Child_1 extends Component{
  render(){
    return <div>
      <p>child_1 component</p>
    </div>
  }
}

export default Parent







