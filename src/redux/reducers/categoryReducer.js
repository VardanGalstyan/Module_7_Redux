import { initialState } from '../stores/index.js'
import { ADD_CATEGORY } from '../actions/actionTypes.js'



const categoryReducer = (state = initialState.searchValue, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                value: action.payload
            }

        default:
            return state
    }
}

export default categoryReducer