import React from 'react'
import ItemShow from './ItemShow'
import {Route, Link} from 'react-router-dom'

const ItemList = (props) => {

    console.log(props)

    return (
    
            <div>
                {props.items.items.map(item => 
                    <li key={item.id}>
                        <Link to={`items/${item.id}`}>{item.name} - {item.price}</Link>
                    </li>)}
            </div>
    )


}

export default ItemList