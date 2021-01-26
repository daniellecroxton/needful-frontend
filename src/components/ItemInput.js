import React from 'react'
import {connect} from 'react-redux'
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
    
}

    render() {

        return (
            <div>
                ItemInput
                <form onSubmit={this.handleSubmit}>
                    <label>Item Name:</label>
                    <input type='text' name="name" value={this.state.name} onChange={this.handleChange}></input>
                    <label>Item Description:</label>
                    <input type='text' name="description" value={this.state.description} onChange={this.handleChange}></input>
                    <label>Item Price:</label>
                    <input type='text' name="price" value={this.state.price} onChange={this.handleChange}></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default connect(null)(ItemInput)