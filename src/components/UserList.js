import React from 'react'
import UserShow from './UserShow'

const UserList = (props) => {

    return (
        <div>
            <ul>
                {props.users.map(user => 
                    <li key={user.id}><UserShow user={user}/></li>)}
            </ul>
        </div>
    )


}

export default UserList