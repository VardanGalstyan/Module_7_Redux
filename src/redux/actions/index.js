import {
        ADD_JOB,
        ADD_OFFSET,
        REMOVE_JOB,
        FILL_DATA,
        FILL_DATA_LOADING,
        FILL_DATA_ERROR,
        ADD_CATEGORY,
        ADD_SEARCH
} from './actionTypes.js'




export const removeJobs = (index) => ({
        type: REMOVE_JOB,
        payload: index
})

export const addToFavoriteActionThunk = (jobsToAdd) => {
        return (dispatch, getState) => {

                dispatch({
                        type: ADD_JOB,
                        payload: jobsToAdd
                })
        }
}


export const fillDataBaseAction = () => {


        return async (dispatch, getState) => {

                const { skip } = getState().offset
                const { input } = getState().searchValue
                const { value } = getState().category

                try {
                        const endpoint = input
                                ? `https://strive-jobs-api.herokuapp.com/jobs?title=${input}&limit=10&offset=${skip}`
                                : value
                                ? `https://strive-jobs-api.herokuapp.com/jobs?category=${value}&limit=10&offset=${skip}`
                                : `https://strive-jobs-api.herokuapp.com/jobs?limit=10&offset=${skip} `
                        let response = await fetch(endpoint)
                        if (response.ok) {
                                let data = await response.json()
                                dispatch({
                                        type: FILL_DATA_LOADING,
                                        payload: false
                                })
                                dispatch({
                                        type: FILL_DATA,
                                        payload: data
                                })
                        } else {
                                console.log("error");
                                dispatch({
                                        type: FILL_DATA_LOADING,
                                        payload: false
                                })
                                dispatch({
                                        type: FILL_DATA_ERROR,
                                        payload: true
                                })
                        }
                } catch (error) {
                        console.log(error);
                        dispatch({
                                type: FILL_DATA_LOADING,
                                payload: false
                        })
                        dispatch({
                                type: FILL_DATA_ERROR,
                                payload: true
                        })
                }

        }
}


export const addOffsetAction = (offsetToAdd) => {
        return (dispatch, getState) => {

                dispatch({
                        type: ADD_OFFSET,
                        payload: offsetToAdd
                })
        }
}

export const addCategoryAction = (offsetToAdd) => {
        return (dispatch, getState) => {

                dispatch({
                        type: ADD_CATEGORY,
                        payload: offsetToAdd
                })
        }
}

export const addSearchAction = (offsetToAdd) => {
        return (dispatch, getState) => {

                dispatch({
                        type: ADD_SEARCH,
                        payload: offsetToAdd
                })
        }
}
