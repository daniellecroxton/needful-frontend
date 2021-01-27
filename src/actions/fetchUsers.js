
export function fetchUsers() {
    return (dispatch) => {
        dispatch({
            type: 'LOADING_TRUE',
            loading: true
        })
        return fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'FETCH_USERS',
            payload: data
        }),
        dispatch({
            type: 'LOADING_FALSE',
            loading: false
        })
        )
        
    }
}