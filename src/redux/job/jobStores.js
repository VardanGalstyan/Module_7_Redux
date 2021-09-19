import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import jobReducer from "./jobReducers";
import dataBaseReducer from "../reducers/reducersDB";
import thunk from "redux-thunk";
import offsetReducer from "../reducers/offsetReducer.js";
import searchReducer from "../reducers/searchReducer";
import categoryReducer from "../reducers/categoryReducer";

export const initialState = {
    favorite: {
        jobs: []
    },

    dataBase: {
        stock: [],
        error: false,
        loading: true
    },

    offset: {
        skip: "0"
    },

    searchValue: {
        input: null
    },

    category: {
        value: ''
    }


}

// const [searchValue, setSearchValue] = useState(null)
// const [categoryValue, setCategoryValue] = useState('')

const combinedReducers = combineReducers({
    favorite: jobReducer,
    dataBase: dataBaseReducer,
    offset: offsetReducer,
    searchValue: searchReducer,
    category: categoryReducer
})

const configureJobs = createStore(
    combinedReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
)

export default configureJobs