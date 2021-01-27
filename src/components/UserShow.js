import React from 'react'
// import {Redirect} from 'react-router-dom'
// import ItemsContainer from '../containers/ItemsContainer'
import {Link} from 'react-router-dom'
// import UsersContainer from '../containers/UsersContainer'

const UserShow = (props) => {
    
    console.log(props)
    
    // let user = props.users[props.match.params.id -1]
    let user = props.users.users.filter(user => user.id === props.match.params.id)[0]

    return (
        <div>
            <h2>
                User Page<br/>
                {user ? user.name : null}
            </h2>

            {/* <Link to={`/users/${user.id}/items/new`}>Add Item</Link>
            <Link to={`/users/${user.id}/items`}>See all of {user.name}'s items</Link> */}

            {/* <ItemsContainer user={user}/> */}
        </div>
    )
}

export default UserShow