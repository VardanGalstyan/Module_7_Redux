import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import jobReducer from "./jobReducers";
import dataBaseReducer from "../database/reducersDB";
import thunk from "redux-thunk";

export const initialState = {
    favorite: {
        jobs: []
    },

    dataBase: {
        stock: [],
        error: false,
        loading: true
    }
}

const combinedReducers = combineReducers({
    favorite: jobReducer,
    dataBase: dataBaseReducer
})

const configureJobs = createStore(
    combinedReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
)

export default configureJobs