import React from 'react'
import ReactDom from 'react-dom'
import Home from './pages/home.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

ReactDom.render(< App /> , document.getElementById('app'))