import { ADD_JOB } from './jobTypes.js'
import { REMOVE_JOB } from './jobTypes.js'
import { FILL_DATA } from './jobTypes'
import { FILL_DATA_LOADING } from './jobTypes'
import { FILL_DATA_ERROR } from './jobTypes'


export const removeJobs = (index) => ({
        type: REMOVE_JOB,
        payload: index
})

export const addToFavoriteActionThunk = (jobsToAdd) => {
        return (dispatch, getState) => {
                console.log('Console logging Something', getState());
                dispatch({
                        type: ADD_JOB,
                        payload: jobsToAdd
                })
        }
}

export const fillDataBaseAction = (searchValue, skip, categoryValue) => {

        // const endpoint = searchValue
        //         ? `https://strive-jobs-api.herokuapp.com/jobs?title=${searchValue}&limit=10&offset=${skip}`
        //         : categoryValue
        //         ? `https://strive-jobs-api.herokuapp.com/jobs?category=${categoryValue}&limit=10&offset=${skip}`
        //         : `https://strive-jobs-api.herokuapp.com/jobs?limit=10&offset=${skip} `

        return async (dispatch, getState) => {
                try {
                        let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10` )
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

