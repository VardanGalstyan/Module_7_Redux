import { ADD_JOB } from './jobTypes.js'
import { REMOVE_JOB } from './jobTypes.js'

export const addJobs = (jobToAdd) => ({
        type: ADD_JOB,
        payload: jobToAdd
})

export const removeJobs = (index) => ({
        type: REMOVE_JOB,
        payload: index
})