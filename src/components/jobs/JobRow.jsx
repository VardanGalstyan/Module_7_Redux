import React from 'react'
import SingleJob from './SingleJob'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SolarSystemLoading } from 'react-loadingg';
import Offset from '../Offset/Offset';
import Jumbotron from '../jumbotron/Jumbotron';
import SearchBar from '../search/SearchBar';



function JobRow() {

    const data = useSelector(state => state.dataBase.stock.data)
    const loading = useSelector(state => state.dataBase.loading)

    return (
        <>
            <Jumbotron />
            <Container>
                <SearchBar />
                <Container id='joblist'>
                    {
                        loading && <SolarSystemLoading />
                    }
                    {
                        data && data.map(job => <SingleJob key={job._id} data={job} />)
                    }
                </Container>
                <Offset />
            </Container>
        </>
    )
}

export default JobRow
