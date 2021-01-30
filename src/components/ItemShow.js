import React from 'react'
import {Link} from 'react-router-dom'

const ItemShow = (props) => {
    
    let item = props.user.items.filter(item => item.id == props.match.params.id)[0]

    return (
        <div>
            <h2>
                {item ? item.name : null}
            </h2>
            <h4>${item.price}</h4>
            <p>{item.description}</p><br/>
            <Link to={`/users/${props.user.id}/items`}>Back to {props.user.name}'s items</Link><br/><br/>
        </div>
    )
}

export default ItemShow