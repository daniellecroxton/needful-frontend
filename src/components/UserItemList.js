import React from 'react'
import {Link} from 'react-router-dom'


const UserItemList = (props) => {

    console.log(props)

    let user = props.user

    return (
        <div>
            <h4>{user.name} has {user.items.length} items.</h4>
            <ul>
                {user.items && user.items.map(item =>
                   <li key={item.id}><Link to={`/users/${item.user_id}/items/${item.id}`}>{item.name} - ${item.price}</Link></li>
                )}
            </ul>
        </div>
    )
}

export default UserItemList