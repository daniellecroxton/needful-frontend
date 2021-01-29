import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchItems} from '../actions/fetchItems'
import {useEffect} from 'react'
import { useDispatch } from "react-redux";

const ItemList = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
      const loadItems = async () => {
        await dispatch(fetchItems());
      };
      loadItems();
    }, [dispatch]);

    console.log(props)
    

    return (
    
            <div>
                All items:
                {props.items.items.map(item => 
                    <li key={item.id}>
                        <Link to={`/users/${item.user_id}/items/${item.id}`}>{item.name} - ${item.price}</Link>
                    </li>)}
            </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchItems})(ItemList)