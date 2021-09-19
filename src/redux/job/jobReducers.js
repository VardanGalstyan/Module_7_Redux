import { ADD_JOB } from './jobTypes.js'
import { REMOVE_JOB } from './jobTypes.js'
import { initialState } from './jobStores.js'





const jobReducer = (state = initialState.favorite, action) => {
    switch (action.type) {
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            }

        case REMOVE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter(job => job._id !== action.payload),
            }

        default:
            return state
    }
}

export default jobReducer