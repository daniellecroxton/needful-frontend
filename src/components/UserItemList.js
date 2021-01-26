import React from 'react'

const UserItemList = (props) => {

    return (
        <div>
            UserItem List
            {props.items && props.items.map(item =>
                <li key={item.id}>{item.name} - {item.price}</li>
                )}
        </div>
    )
}

export default UserItemList