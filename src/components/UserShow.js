import React from 'react'

const UserShow = (props) => {
    
    console.log(props.users)

    let user = props.users[props.match.params.id -1]

    return (
        <div>
            {user ? user.name : null}
        </div>
    )

}

export default UserShow