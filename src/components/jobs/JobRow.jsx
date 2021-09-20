import React from 'react'
import SingleJob from './SingleJob'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SolarSystemLoading } from 'react-loadingg';


function JobRow() {

    const data = useSelector(state => state.dataBase.stock.data)
    const loading = useSelector(state => state.dataBase.loading)

    return (
        <Container id='joblist'>
            {
                loading && <SolarSystemLoading/>
            }
            {
                data && data.map(job => <SingleJob key={job._id} data = {job} /> )
            }
        </Container>
    )
}

export default JobRow
