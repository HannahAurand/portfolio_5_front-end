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
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleEdit() {
    //need to set the state to the user's new inputs
    this.setState({ [event.target.name]: event.target.value})
}
        render() {
            return (
                <div className="edit_project">
                <form onSubmit={this.handleSubmit}>
                Name
                <input name='name' type='text' value={this.state.name} onChange={this.handleEdit} placeholder={this.state.name} />
                Description
                <input name='description' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}/>
                Languages
                <input name='languages' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}/>
                Link
                <input name='link' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}/>
                Image
                <input name='link' type='text' value={} onChange={this.handleEdit} placeholder={this.state.name}/>
                <button onClick='Submit'>Submit Edit</button>
                </form>
                </div>
            )
        }
}
