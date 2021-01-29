import React from 'react';
import ItemList from '../components/ItemList'
import {Route, Switch} from 'react-router-dom'
class ItemsContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.loading ? <h2>LOADING...</h2> : null}

                <Switch>
                    <Route path='/items/' component={ItemList} />
                </Switch>
            </div>
        )


    }
}

export default ItemsContainer