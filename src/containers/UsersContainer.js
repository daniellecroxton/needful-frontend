import React from 'react';
import {connect} from 'react-redux'
import UserList from '../components/UserList'
import UserInput from '../components/UserInput'
import UserShow from '../components/UserShow'
import {fetchUsers} from '../actions/fetchUsers'
import {Route, Switch} from 'react-router-dom'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
                Users Container
                <Switch>
                    {/* <UserList users={this.props.users}/> */}
                    <Route path='/users/new' component={UserInput}/>
                    {/* <UserInput/> */}
                    <Route path='/users/:id' render={(routerProps) => <UserShow {...routerProps} users={this.props.users}/>}/>
                    <Route path='/users' render={(routerProps) => <UserList {...routerProps} users={this.props.users}/>}/>
                </Switch>
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