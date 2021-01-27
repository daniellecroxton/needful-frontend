import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchItems} from '../actions/fetchItems'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

const ItemList = (props) => {

    // const items = useState([]);


    // useEffect(() =>{fetchItems()}, [])

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
                {props.items.items.map(item => 
                    <li key={item.id}>
                        <Link to={`/users/${item.user_id}/items/${item.id}`}>{item.name} - {item.price}</Link>
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

// export default ItemList