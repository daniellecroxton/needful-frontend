import React from 'react';
import {connect} from 'react-redux'
import {fetchItems} from '../actions/fetchItems'
import ItemInput from '../components/ItemInput'
import UserItemList from '../components/UserItemList'
import ItemList from '../components/ItemList'
import ItemShow from '../components/ItemShow'
import {Route, Switch} from 'react-router-dom'
class ItemsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        return (
            <div>
                Items Container
                <ItemInput user={this.props.user}/>
                <UserItemList items={this.props.user && this.props.user.items}/>
                <ItemList items={this.props.items && this.props.items}/>
                <Route path='/items/:id' render={(routerProps) => <ItemShow {...routerProps} items={this.props.items && this.props.items}/>}/>
            </div>
        )


    }
}


const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {fetchItems})(ItemsContainer)