import React, {Component, PureComponent} from 'react'

/* class Item extends PureComponent{
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

  componentDidUpdate() {
    console.log('update',this.props.name)
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
} */
/* class Child extends Component{
  render() {
      return (
          <div>
              {this.props.name}
          </div>
      );
  }
  componentDidMount() {
      console.log('mount',this.props.name)
  }
  componentDidUpdate() {
      console.log('update',this.props.name)
  }
  componentWillUnmount() {
      console.log('unmount',this.props.name)
  }

}
class App extends Component{
  state = {
      list: ['a','b','c']
  }
  render() {
      return (
          <div>
              {this.state.list.map(item => <Child  name={item}/>)}
              <button onClick={e => {
                  this.setState({
                      list: ['b','c','d']
                  })
              }}>set</button>
          </div>
      );
  }
} */
/*
class Child extends Component{
  render() {
          return (
                   <div>
                            {this.props.name}
                   </div>
          );
  }
  componentDidMount() {
          console.log('mount',this.props.name)
  }
  componentDidUpdate() {
          console.log('update',this.props.name)
  }
  componentWillUnmount() {
          console.log('unmount',this.props.name)
  }

}
class App extends Component{
  state = {
          list: ['a','b','c']
  }
  render() {
          return (
                   <div>
                            {this.state.list.map(item => <Child key={item} name={item}/>)}
                            <button onClick={e => {
                                     this.setState({
                                             list: ['b','c','d']
                                     })
                            }}>set</button>
                   </div>
          );
  }
}*/

class App extends Component{
  state = {
    num: 1
  }
  render() {
    return (
      <div>
        sss
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.num)
  }
  componentDidMount() {
    setTimeout(() => {
      console.log('timeout')
    })
    new Promise((resovle) => {
      console.log('before')
      resovle('then')
      console.log('after')
    }).then(res => {
      console.log(res)
    })
    let {num} = this.state
    this.setState({
      num: ++num
    }, () => {
      console.log('after setState')
    })
    console.log('---')
  }
}

export default App