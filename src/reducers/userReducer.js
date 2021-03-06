export default function userReducer(state = {users: []}, action) {

    switch (action.type) {
        case 'FETCH_USERS':
            return {users: action.payload}
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}
        case 'ADD_ITEM':
            let users = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
                return {...state, users: users}
        // case 'UPDATE_ITEM':
        //     let usersUpdated = state.users.map(user => {
        //         if (user.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return user
        //         }
        //     })
        //         return {...state, users: usersUpdated}
        default:
            return state
    }
}