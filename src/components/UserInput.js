import React from 'react'

class UserInput extends React.Component {

    state = { name: '' }

    render() {

        return (
            <div>
                <form>
                    <label>Username:</label>
                    <input type='text' placeholder='Username' value={this.state.name}></input><br/>
                    
                </form>
            </div>
        )
    }
}

export default UserInput