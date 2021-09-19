import { initialState } from "../stores";
import { FILL_DATA } from "../actions/actionTypes";
import { FILL_DATA_LOADING } from "../actions/actionTypes";
import { FILL_DATA_ERROR } from "../actions/actionTypes";


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