import { initialState } from '../job/jobStores.js'
import { ADD_OFFSET } from '../job/jobTypes.js'



const offsetReducer = (state = initialState.offset, action) => {
    switch (action.type) {
        case ADD_OFFSET:
            return {
                ...state,
                skip: action.payload
            }

        default:
            return state
    }
}

export default offsetReducer