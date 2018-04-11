import React, { Component } from 'react'
import axios from 'axios'
import './EditProject.css'

class EditProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      languages: '',
      link: '',
      image: ''
    }
}
        render() {
            return (
                <div className="edit_project">
                <form onSubmit={this.handleSubmit}>
                Name<input name='name' type='text' value={this.state.name} onChange={this.handleEdit} placeholder={this.state.name}></input>
                Description<input name='description' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}></input>
                Languages<input name='languages' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}></input>
                Link<input name='link' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}></input>
                Image<input name='link' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}></input>
                <button onClick='Submit'></button>
                </form>
                </div>
            )
        }
}
