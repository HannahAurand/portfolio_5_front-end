import React, { Component } from 'react'
import './About.css'
import axios from 'axios'

class About extends Component {
  constructor() {
    super()
    this.state = {
      LandingPage: []
    }
  }
  componentDidMount() {
    axios.get('https://portfolio-server-1991.herokuapp.com/').then(res => {
      this.setState({
        LandingPage: res.data
      })
    })
  }
  render() {
    let data = this.state.LandingPage.map((data, index) => {
      return <li key={index}>{data.name}</li>
    })
    return (
      <div className="About">
        <p>{data}</p>
      </div>
    )
  }
}

export default About
