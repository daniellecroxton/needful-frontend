export default function itemReducer(state = {items: []}, action) {

    switch (action.type) {
        // case 'START_FETCHING_ITEMS':
        //     return {
        //       ...state,
        //       items: [...state.items],
        //       requesting: true
        //     }
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload]}
        case 'FETCH_ITEMS':
            return {
                items: action.payload, 
                requesting: false
            }
        default:
            return state
    }
}