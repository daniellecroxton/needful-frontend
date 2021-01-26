
export const updateItem = (item) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users/${item.user.id}/items/${item.id}', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(item => dispatch({type: 'UPDATE_ITEM', payload: item}))
    }
}

