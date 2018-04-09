import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import About from './about/About.js'
import { BrowserRouter as Router } from 'react-router-dom'

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
        <About />
      </div>
    )
  }
}

export default App
