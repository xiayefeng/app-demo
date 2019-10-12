import React, { Component } from 'react'

class MyComponent extends Component {

  static columnAction = [ {
    title: '哈哈哈'
  } ]

  static getColumnTitle = (tabkeys) => {
    console.log(this.columnAction)
  }

  render ()
  {
    return (
      <div>app</div>
    )
  }
}

class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
  getValue(){
    console.log(this.html)
  }
}
var customEl = new CustomHTMLElement(document.getElementsByTagName('body')[0])
// customEl.getValue()

MyComponent.getColumnTitle()

export default MyComponent
