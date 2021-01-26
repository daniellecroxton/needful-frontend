export default function itemReducer(state = {items: []}, action) {

    switch (action.type) {
        case 'FETCH_ITEMS':
            return {items: action.payload}
        default:
            return state
    }
}