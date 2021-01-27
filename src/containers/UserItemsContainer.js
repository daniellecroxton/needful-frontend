import React from 'react';
import ItemInput from '../components/ItemInput'
import UserItemList from '../components/UserItemList'
import ItemShow from '../components/ItemShow'
import {Route, Switch} from 'react-router-dom'

class UserItemsContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.loading ? <h2>LOADING...</h2> : null}
                {console.log(this.props)}

                <Switch>
                    <Route path='/users/:id/items/new' render={(routerProps) => <ItemInput {...routerProps} user={this.props.user && this.props.user}/>}/>
                    <Route exact path='/users/:id/items/' render={(routerProps) => <UserItemList {...routerProps} user={this.props.user && this.props.user}/>}/>
                    <Route path='/users/:id/items/:id' render={(routerProps) => <ItemShow {...routerProps} user={this.props.user && this.props.user}/>}/>
                </Switch>
            </div>
        )


    }
}

export default UserItemsContainer