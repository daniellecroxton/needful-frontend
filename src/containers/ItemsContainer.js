import React from 'react';
import {connect} from 'react-redux'
import {fetchItems} from '../actions/fetchItems'
import ItemInput from '../components/ItemInput'
import UserItemList from '../components/UserItemList'
import ItemList from '../components/ItemList'
import ItemShow from '../components/ItemShow'
import {Route, Switch} from 'react-router-dom'
class ItemsContainer extends React.Component {

    // componentDidMount() {
    //     this.props.fetchItems()
    // }


    render() {
        return (
            <div>
                {this.props.loading ? <h2>LOADING...</h2> : null}
                {console.log(this.props)}

                <Switch>
                    <Route path='/users/:id/items/new' render={(routerProps) => <ItemInput {...routerProps} user={this.props.user && this.props.user}/>}/>
                    <Route path='/users/:id/items/' render={(routerProps) => <UserItemList {...routerProps} users={this.props.users && this.props.users}/>}/>
                    <Route path='/users/:id/items/:id' render={(routerProps) => <ItemShow {...routerProps} items={this.props.items && this.props.items}/>}/>
                    <Route path='/items/' component={ItemList} />
                </Switch>
            </div>
        )


    }
}


// const mapStateToProps = state => {
//     return {
//         items: state.items,
//         loading: state.loading
//     }
// }

// export default connect(mapStateToProps, {fetchItems})(ItemsContainer)

export default ItemsContainer