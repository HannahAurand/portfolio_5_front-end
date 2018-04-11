import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import AddProject from '/Users/hannahaurand/wdi/portfolio/Front-End/portfolio/src/addProject/AddProject.js'
import './ProjectCard.css'

class ProjectCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    axios
      .get(
        'https://portfolio-server-1991.herokuapp.com/project/' + this.props.id
      )
      .then(res => {
        this.setState({
          project: res.data
        })
      })
  }

  handleDelete(e) {
    e.preventDefault()
    axios
      .delete(
        'https://portfolio-server-1991.herokuapp.com/project/' + this.props.id
      )
      .then(res => {
        //update state in parent
        this.props.updateList(this.props.index)
        console.log(this.props.index)
      })
  }
  render() {
    console.log(this.state.project)

    return (
      <div className="project_card">
        <img src={this.state.project.image} />
        <ul>
          <li>{this.state.project.name}</li>
          <li>{this.state.project.description}</li>
          <li>{this.state.project.languages}</li>
          <li>{this.state.project.link}</li>
        </ul>
        <button onClick={this.handleDelete}>
          Completely Destroy this project
        </button>
        <button>onClick={this.handleEdit}</button>
      </div>
    )
  }
}

export default ProjectCard
