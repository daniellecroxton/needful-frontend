import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/createUser'

class UserInput extends React.Component {

    state = { name: '' }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createUser(this.state)
        this.setState({ name: '' })
        
    }


    render() {

        return (
            <div>
                <h3>Create a new user</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type='text' value={this.state.name} name="name" onChange={this.handleChange}></input><br/>
                    <input type='submit' value='Submit'></input>
                </form>
            </div>
        )
    }
}


export default connect(null, {createUser})(UserInput)