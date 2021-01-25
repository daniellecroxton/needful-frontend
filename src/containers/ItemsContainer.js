import React from 'react';
import ItemInput from '../components/ItemInput'
import UserItemList from '../components/UserItemList'

class ItemsContainer extends React.Component {

    render() {
        return (
            <div>
                Items Container
                console.log(props)
                <ItemInput/>
                <UserItemList items={this.props.user && this.props.user.items}/>
            </div>
        )


    }
}

export default ItemsContainer