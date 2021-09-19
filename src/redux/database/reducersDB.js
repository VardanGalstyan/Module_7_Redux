import { initialState } from "../job/jobStores";
import { FILL_DATA } from "../job/jobTypes";
import { FILL_DATA_LOADING } from "../job/jobTypes";
import { FILL_DATA_ERROR } from "../job/jobTypes";


const dataBaseReducer = (state = initialState.dataBase, action) => {
    switch (action.type) {
        case FILL_DATA:
            return {
                ...state,
                stock: action.payload
            }
        case FILL_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case FILL_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default dataBaseReducer