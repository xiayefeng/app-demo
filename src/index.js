import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import App from './App'
 // import App from './demo2'
// import App from './demo1'
// import App from './demo'
 //import App from './demo6'
 // import App from './demo7'
 // import App from './demo8'
 // import App from './demo9'
 // import App from './demo10'
 import App from './demo11'
 // import App from './App2'
// import App from './react&ES6'
// import App from './demo3'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App/>, document.getElementById('root'))

// ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
