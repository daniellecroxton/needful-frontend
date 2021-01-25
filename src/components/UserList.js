import React from 'react'
import UserShow from './UserShow'
import {Route, Link} from 'react-router-dom'

const UserList = (props) => {

    return (
            <div>
                {props.users.map(user => 
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>)}
            </div>
    )


}

export default UserList