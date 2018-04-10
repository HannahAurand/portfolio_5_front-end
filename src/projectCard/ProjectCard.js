import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import AddProject from '/Users/hannahaurand/wdi/portfolio/Front-End/portfolio/src/addProject/AddProject.js'
import './ProjectCard.css'

class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    axios
      .get('https://portfolio-server-1991.herokuapp.com/project')
      .then(res => {
        this.setState({
          projects: res.data
        })
      })
  }

  render() {
    let data = this.state.projects.map((data, index) => {
      return (
        <div className="projectCardContainer">
          <div className="projectCard">
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>{data.languages}</p>
            <p>{data.link}</p>
            <p>
              <img src={data.image} alt={data.name} />
            </p>
          </div>
        </div>
      )
    })
    return <div>{data}</div>
  }
}

export default Projects
