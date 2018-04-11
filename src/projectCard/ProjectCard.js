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
        console.log(this.props.index)
      })
    this.props.updateList(this.props.index)
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
    return (
      <div>
        {this.state.project.name}
        <button onClick={this.handleDelete}>
          Completely Destroy this project
        </button>
      </div>
    )
  }
}

export default ProjectCard
