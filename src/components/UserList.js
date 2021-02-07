import React from 'react'
import {Link} from 'react-router-dom'

class UserList extends React.Component {

state = {}

like = (buttonId) => {
    this.state[buttonId] !== 1 ? this.setState({[buttonId]: 1}) : this.setState({[buttonId]: 0})
  }

    render() {
        return (
                <div>
                    {this.props.users.users.map(user => 
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                            <button onClick={() => this.like(user.id)}>{this.state[user.id] ? this.state[user.id] : 0}</button>
                        </li>)}
                </div>
        )
    }
}

export default UserList



// --------- Previous Code ---------

// import React from 'react'
// import {Link} from 'react-router-dom'

// const UserList = (props) => {

//     return (
//             <div>
//                 {props.users.users.map(user => 
//                     <li key={user.id}>
//                         <Link to={`/users/${user.id}`}>{user.name}</Link>
//                     </li>)}
//             </div>
//     )
// }

// export default UserList