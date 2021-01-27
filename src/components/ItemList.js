import React from 'react'
import {Link} from 'react-router-dom'

const ItemList = (props) => {

    console.log(props)

    return (
    
            <div>
                {props.items.items.map(item => 
                    <li key={item.id}>
                        <Link to={`/users/${item.user_id}/items/${item.id}`}>{item.name} - {item.price}</Link>
                    </li>)}
            </div>
    )


}

export default ItemList