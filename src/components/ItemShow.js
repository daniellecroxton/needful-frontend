import React from 'react'
// import {Redirect} from 'react-router-dom'
// import ItemsContainer from '../containers/ItemsContainer'

const ItemShow = (props) => {
    
    console.log(props)

    let item = props.user.items.filter(item => item.id == props.match.params.id)[0]

    console.log(props.match.params.id)

    return (
        <div>
            <h2>
                Item Page<br/>
                {item ? item.name : null}
            </h2>
            {/* <ItemsContainer item={item}/> */}
        </div>
    )
}

export default ItemShow