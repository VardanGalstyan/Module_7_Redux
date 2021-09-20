import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import jobReducer from "../reducers/jobReducers.js";
import dataBaseReducer from "../reducers/reducersDB.js";
import offsetReducer from "../reducers/offsetReducer.js";
import searchReducer from "../reducers/searchReducer.js";
import categoryReducer from "../reducers/categoryReducer.js";
import storageSession from 'redux-persist/lib/storage/session'
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

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

const persistConfig = {
    key: 'root',
    storage: storageSession,
    transforms: [
        encryptTransform({
            secretKey: "process.env.REACT_APP_ENCRYPT_KEY",
            onError: function (error) {
                console.log(error);
            },
        }),
    ],
}

const combinedReducers = combineReducers({
    favorite: jobReducer,
    dataBase: dataBaseReducer,
    offset: offsetReducer,
    searchValue: searchReducer,
    category: categoryReducer
})

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const configureJobs = createStore(
    persistedReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
)

export const persistor = persistStore(configureJobs)