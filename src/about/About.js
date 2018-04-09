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
      return (
        <div>
          <p>{data.name}</p>
          <p>{data.about}</p>
          <p>{data.link}</p>
          <p>
            <img src={data.image} alt="CHARGING BULL" />
          </p>
          <p>{data.welcomeMessage}</p>
        </div>
      )
    })
    return <div className="About">{data}</div>
  }
}

export default About
