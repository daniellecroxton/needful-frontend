import React from 'react'
// import {Redirect} from 'react-router-dom'
import UserItemsContainer from '../containers/UserItemsContainer'
import {Link} from 'react-router-dom'
// import UsersContainer from '../containers/UsersContainer'

const UserShow = (props) => {
    
    console.log(props)
    
    let user = props.users.users.filter(user => user.id == props.match.params.id)[0]

    // console.log(props.users.users[0].id)
    // console.log(props.match.params.id)
    // console.log(user)

    return (
        <div>
            <h2>
                {user ? user.name : null}
            </h2>

            
            <Link to={`/users/${user.id}/items/new`}>Add item to {user.name}</Link><br/><br/>
            <Link to={`/users/${user.id}/items`}>See all of {user.name}'s items</Link>

            <UserItemsContainer user={user}/>
        </div>
    )
}

export default UserShow