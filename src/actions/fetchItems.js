export function fetchItems() {
    return (dispatch) => {
        dispatch({
            type: 'LOADING_TRUE',
            loading: true
        })
        return fetch('http://localhost:3000/api/v1/items')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_ITEMS',
            payload: data
        }),
        dispatch({
            type: 'LOADING_FALSE',
            loading: false
        })
        )
        
    }
}