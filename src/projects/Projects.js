import React, { Component } from 'react'
import './Projects.css'
import axios from 'axios'

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
        <div>
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>{data.languages}</p>
          <p>{data.link}</p>
          <p>
            <img src={data.image} alt={data.name} />
          </p>
        </div>
      )
    })
    return <div className="projects">{data}</div>
  }
}

export default Projects
