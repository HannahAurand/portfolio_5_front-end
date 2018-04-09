import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="name">
          <p>Login</p>
          <p>Sign-up</p>
          <div className="menu">
            <p>Projects</p>
            <p>Experience</p>
            <p>JS Playground</p>
          </div>
        </nav>
      </div>
    )
  }
}

export default App
