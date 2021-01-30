import React from 'react'
import UserItemsContainer from '../containers/UserItemsContainer'
import {Link} from 'react-router-dom'

const UserShow = (props) => {
        
    let user = props.users.users.filter(user => user.id == props.match.params.id)[0]

    return (
        <div>
            {user ?
                <div>
                    <h2>
                        {user.name}
                    </h2>
            
                    <Link to={`/users/${user.id}/items/new`}>Add item to {user.name}</Link><br/><br/>
                    <Link to={`/users/${user.id}/items`}>See all of {user.name}'s items</Link><br/><br/>

                    <UserItemsContainer user={user}/>
                </div>
            :  <h2>LOADING...</h2>  }
        </div>
    )
}

export default UserShow