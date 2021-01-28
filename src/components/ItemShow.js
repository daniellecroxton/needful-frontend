import React from 'react'
import {Link} from 'react-router-dom'

// import {Redirect} from 'react-router-dom'
// import ItemsContainer from '../containers/ItemsContainer'

const ItemShow = (props) => {
    
    console.log(props)

    let item = props.user.items.filter(item => item.id == props.match.params.id)[0]

    console.log(props.match.params.id)

    return (
        <div>
            <h2>
                {item ? item.name : null}
            </h2>
            <h4>${item.price}</h4>
            <p>{item.description}</p><br/>
            {/* <ItemsContainer item={item}/> */}
            <Link to={`/users/${props.user.id}/items`}>Back to {props.user.name}'s items</Link><br/><br/>
        </div>
    )
}

export default ItemShow