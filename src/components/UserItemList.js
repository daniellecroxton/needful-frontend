import React from 'react'
import {connect} from 'react-redux'
import {updateItem} from '../actions/updateItem'

const UserItemList = (props) => {

    const handleUpdate = (item) => {
        props.updateItem(item.id, item.user.id)
    }

    return (
        <div>
            UserItem List
            {props.items && props.items.map(item =>
                <li key={item.id}>{item.name} - {item.price} <button onClick={() => handleUpdate(item)}/>Update</li>
                )}
        </div>
    )
}

export default connect(null, {updateItem})(UserItemList)