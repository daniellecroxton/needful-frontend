import React from 'react';
import {connect} from 'react-redux'
import UserList from '../components/UserList'
import UserInput from '../components/UserInput'
import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                Users Container
                <UserList users={this.props.users}/>
                <UserInput/>
            </div>
        )


    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)