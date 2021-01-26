import React from 'react';
import UserList from '../components/UserList'
import UserInput from '../components/UserInput'
import UserShow from '../components/UserShow'
import {Route, Switch} from 'react-router-dom'

class UsersContainer extends React.Component {


    render() {
        return (
            <div>
                Users Container
                <Switch>
                    <Route path='/users/new' component={UserInput}/>
                    <Route path='/users/:id' render={(routerProps) => <UserShow {...routerProps} users={this.props.users && this.props.users}/>}/>
                    <Route path='/users' render={(routerProps) => <UserList {...routerProps} users={this.props.users && this.props.users}/>}/>
                </Switch>
            </div>
        )


    }
}

export default UsersContainer