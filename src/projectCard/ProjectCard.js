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
    console.log(this.props.match.params.id)
    axios.delete(
      'https://portfolio-server-1991.herokuapp.com/project/' +
        this.state.match.params.id
    )
  }
  render() {
    console.log(this.state.project)
    // let data = this.state.projects.map((data, index) => {
    // return (
    //   <div className="projectCardContainer">
    //     <div className="projectCard">
    //       <p>{data.name}</p>
    //       <p>{data.description}</p>
    //       <p>{data.languages}</p>
    //       <p>{data.link}</p>
    //       <p>
    //         <img src={data.image} alt={data.name} />
    //       </p>
    //     </div>
    //   </div>
    //)
    //})
    return <div>{this.state.project.name}</div>
  }
}

export default ProjectCard
