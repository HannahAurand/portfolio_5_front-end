import React, { Component } from 'react'
import axios from 'axios'

class AddProject extends Component {
    contstructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit (e) {
        e.preventDefault()
        console.log(e.target.name.value)
        axios
        .post('https://portfolio-server-1991.herokuapp.com/project', {
            name: e.target.name.value,
            description: e.target.description.value,
            image: e.target.image.value,
            languages: e.target.languages.value,
            link: e.target.link.value
        }).then(res => console.log(res))
        .then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <div className="addProject">
            <form onSubmit={this.onSubmit}>
            <input type='text' name='name' className="add_Input" />
            <input type='text' name='description' placeholder='description' className='add_input' />
            <input type='text' name='image' placeholder='image' className='add_input' />
            <input type='text' name='language' placeholder='language' className='add_input' />
            <input type='text' name='link' placeholder='link' className='add_input' />
            <input type='submit' value='create' className='add_input_button' />
            </form>
            </div>
        )
    }
}

export default addProject