import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import About from './about/About.js'
import Projects from './projects/Projects.js'
import Experience from './experience/Experience.js'
import Playground from './playground/Playground.js'
import AddProject from '/Users/hannahaurand/wdi/portfolio/Front-End/portfolio/src/addProject/AddProject.js'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="name">
          <Link to path="">
            <p>Login</p>
          </Link>
          <Link to path="">
            <p>Sign-up</p>
          </Link>

          <Link path to="/project">
            <p>Projects</p>
          </Link>
          <Link path to="/experience">
            <p>Experience</p>
          </Link>
          <Link path to="/playground">
            <p>JS Playground</p>
          </Link>
        </nav>
        <Switch>
          <Route path="/project/create" component={AddProject} />
          <Route path="/playground" component={Playground} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={Projects} />
          <Route path="/" component={About} />
        </Switch>
      </div>
    )
  }
}

export default App
