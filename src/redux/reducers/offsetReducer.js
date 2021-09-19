import { initialState } from '../stores/index.js'
import { ADD_OFFSET } from '../actions/actionTypes.js'



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