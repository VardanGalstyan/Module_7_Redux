import { initialState } from '../stores/index.js'
import { ADD_SEARCH } from '../actions/actionTypes.js'



const searchReducer = (state = initialState.searchValue, action) => {
    switch (action.type) {
        case ADD_SEARCH:
            return {
                ...state,
                input: action.payload
            }

        default:
            return state
    }
}

export default searchReducer