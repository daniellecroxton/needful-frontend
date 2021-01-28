
export const createItem = (item, userId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}/items`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(item => {
            if (item.error) {
                alert(item.error)
            } else {
            dispatch({type: 'ADD_ITEM', payload: item})
            }})
    }
}