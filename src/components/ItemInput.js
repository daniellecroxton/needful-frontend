import React from 'react'
import {connect} from 'react-redux'
import { createItem } from '../actions/createItem'
class ItemInput extends React.Component {

state = {
    name: '',
    description: '',
    price: ''
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    this.props.createItem(this.state, this.props.user.id)
    this.setState({
        name: '',
        description: '',
        price: ''
    })
}


    render() {

        return (
            <div>
                <h2>
                    {this.props.user ? this.props.user.name : null}
                </h2>
                <h4>Add a new item</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Item Name:</label>
                    <input type='text' name="name" value={this.state.name} onChange={this.handleChange}></input><br/>
                    <label>Item Description:</label>
                    <input type='text' name="description" value={this.state.description} onChange={this.handleChange}></input><br/>
                    <label>Item Price: $</label>
                    <input type='text' name="price" value={this.state.price} onChange={this.handleChange}></input><br/>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default connect(null, {createItem})(ItemInput)