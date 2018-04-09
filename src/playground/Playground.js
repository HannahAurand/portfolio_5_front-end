import React, { Component } from 'react'
import './Playground.css'
import axios from 'axios'

class Playground extends Component {
  constructor() {
    super()
    this.state = {
      playgrounds: []
    }
  }
  componentDidMount() {
    axios
      .get('https://portfolio-server-1991.herokuapp.com/playground')
      .then(res => {
        this.setState({
          playgrounds: res.data
        })
      })
  }
  render() {
    let data = this.state.playgrounds.map((data, index) => {
      return (
        <div>
          <p>{data.name}</p>
          <p>{data.about}</p>
          <p>{data.link}</p>
          <p>{data.codeSnippet}</p>
        </div>
      )
    })
    return <div className="playground">{data}</div>
  }
}

export default Playground
