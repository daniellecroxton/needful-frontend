import React from 'react'

const UserItemList = (props) => {


    let user = props.users.users.filter(user => user.id == props.match.params.id)[0]


    return (
        <div>
            {user.name} has {user.items.length} items.
            <ul>
                {user.items && user.items.map(item =>
                    <li key={item.id}>{item.name} - {item.price} </li>
                )}
            </ul>
        </div>
    )
}

export default UserItemList