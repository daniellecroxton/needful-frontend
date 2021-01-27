import React from 'react';
import UserList from '../components/UserList'
import UserInput from '../components/UserInput'
import UserShow from '../components/UserShow'
import {Route, Switch} from 'react-router-dom'

class UsersContainer extends React.Component {


    render() {
        return (
            <div>
                <div className='sidenav'>

                Users:
                <UserList users={this.props.users && this.props.users}/>
                </div>
            <div className='main'>
                <Switch>
                    <Route path='/users/new' component={UserInput}/>
                    <Route exact path='/users/:id' render={(routerProps) => <UserShow {...routerProps} users={this.props.users && this.props.users}/>}/>
                    {/* <Route path='/users' render={(routerProps) => <UserList {...routerProps} users={this.props.users && this.props.users}/>}/> */}
                </Switch>
            </div>
            </div>
        )


    }
}

export default UsersContainer