import React from 'react';
import {connect} from 'react-redux'
import UserList from '../components/UserList'
import UserInput from '../components/UserInput'
import {fetchUsers} from '../actions/fetchUsers'
import {Route} from 'react-router-dom'
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                Users Container
                <Route exact path='/users' render={() => <UserList users={this.props.users}/>}/>
                {/* <UserList users={this.props.users}/> */}
                <Route path='/users/new' component={UserInput}/>
                {/* <UserInput/> */}
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