import { ADD_JOB } from './jobTypes.js'
import { REMOVE_JOB } from './jobTypes.js'
import {initialState} from './jobStores.js'


const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_JOB:
            return {
                ...state,
                favorite: {
                    ...state.favorite,
                    jobs: [...state.favorite.jobs, action.payload],
                }
            }

        case REMOVE_JOB: return {
            ...state,
            favorite: {
                ...state.favorite,
                jobs: state.cart.jobs.filter((job, i) => i !== action.payload),
            }
        }

        default:
            return state
    }
}

export default jobReducer