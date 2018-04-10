import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'

class ProjectDetails extends Component {
  constructor() {
    super()
    this.state = {
      project: []
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://portfolio-server-1991.herokuapp.com/project' +
          '/' +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          project: res.data
        })
      })
  }

  render() {
    //let data = this.state.projects.map((data, index) => {
    let data = this.state.project
    return (
      <div className="projectDetails">
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
    // })
    return <div>{data}</div>
  }
}

export default ProjectDetails
