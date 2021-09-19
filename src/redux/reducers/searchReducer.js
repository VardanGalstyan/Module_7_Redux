import { initialState } from '../job/jobStores.js'
import { ADD_SEARCH } from '../job/jobTypes.js'



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