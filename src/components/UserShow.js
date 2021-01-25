import React from 'react'
import {Redirect} from 'react-router-dom'
import ItemsContainer from '../containers/ItemsContainer'

const UserShow = (props) => {
    
    console.log(props.users)

    let user = props.users[props.match.params.id -1]

    return (
        <div>
            <h2>
                User Page
                {user ? user.name : null}
            </h2>
            <ItemsContainer user={user}/>
        </div>
    )
}

export default UserShow