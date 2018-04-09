import React, { Component } from 'react'
import './Experience.css'
import axios from 'axios'

class Experience extends Component {
  constructor() {
    super()
    this.state = {
      experience: []
    }
  }
  componentDidMount() {
    axios
      .get('https://portfolio-server-1991.herokuapp.com/experience')
      .then(res => {
        this.setState({
          experience: res.data
        })
      })
  }
  render() {
    let data = this.state.experience.map((data, index) => {
      return (
        <div>
          <p>{data.job}</p>
          <p>{data.dates}</p>
          <p>{data.duties}</p>
          <p>{data.location}</p>
          <p>{data.welcomeMessage}</p>
          <p>{data.skillsAcquired}</p>
          <p>{data.managerName}</p>
          <p>{data.managerContact}</p>
          <p>{data.likes}</p>
          <p>{data.dislikes}</p>
          <p>{data.reasonLeft}</p>
        </div>
      )
    })
    return <div className="About">{data}</div>
  }
}

export default Experience
