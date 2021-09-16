import { createStore } from "redux";
import jobReducer from "./jobReducers";

export const initialState = {
    favorite: {
        jobs: []
    },
}

const configureJobs = createStore(
    jobReducer, 
    initialState,
    process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureJobs