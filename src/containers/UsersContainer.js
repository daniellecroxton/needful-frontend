import React from 'react';
import UserList from '../components/UserList'
import UserInput from '../components/UserInput'


class UsersContainer extends React.Component {

    render() {
        return (
            <div>
                Users Container
                <UserList/>
                <UserInput/>
            </div>
        )


    }
}

export default UsersContainer