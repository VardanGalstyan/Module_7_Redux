import { initialState } from '../job/jobStores.js'
import { ADD_CATEGORY } from '../job/jobTypes.js'



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