

export function fetchItems() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/items')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_ITEMS',
            payload: data
        }))
        
    }
}

