import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import AddProject from '/Users/hannahaurand/wdi/portfolio/Front-End/portfolio/src/addProject/AddProject.js'
import ProjectCard from '/Users/hannahaurand/wdi/portfolio/Front-End/portfolio/src/projectCard/ProjectCard.js'
//import '/Users/hannahaurand/wdi/portfolio/Front-End/portfolio/src/projectCard/ProjectCard.css'

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
      console.log(data._id)
      return (
        <div className="ProjectCardContainer">
          <Link to={'/project/' + data._id}>
            <ProjectCard id={data._id} />
          </Link>
        </div>
      )
    })
    return (
      <div>
        <Link path to="/project/create">
          <button>Add New Project</button>
        </Link>
        {data}
      </div>
    )
  }
}

export default Projects
