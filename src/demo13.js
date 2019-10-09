import React, { Component } from 'react'

class MyComponent extends Component {

  static columnAction = [ {
    title: '哈哈哈'
  } ]

  static getColumnTitel = (tabkeys) => {
    console.log(this.columnAction)
  }



  render ()
  {
    return (
      <div>app</div>
    )
  }
}

MyComponent.getColumnTitel()

export default MyComponent
