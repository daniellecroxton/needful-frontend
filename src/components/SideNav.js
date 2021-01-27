import React from 'react'
import {Link} from 'react-router-dom'

const SideNav = () => {
    

    return (

        <div>
            <Link to='/items'>All Items</Link><br/><br/>
            <Link to='/users/new'>Add User</Link><br/><br/>
        </div>
    )
}

export default SideNav