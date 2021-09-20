import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFlagFill } from 'react-icons/bs'
import { connect } from 'react-redux'
import { removeJobs, addToFavoriteActionThunk } from '../../redux/actions'
import { formatDistance, subDays } from 'date-fns'

const mapStateToProps = state => ({
    jobs: state.favorite.jobs,
})

const mapDispatchToProps = dispatch => ({
    addFavJobs: (jobToAdd) => dispatch(addToFavoriteActionThunk(jobToAdd)),
    removeFromFavorite: (index) => dispatch(removeJobs(index)),

})

function SingleJob({ data, jobs, removeFromFavorite, addFavJobs }) {
    return (
        <Row>
            <Col md={6}>
                <h5>{data.title}</h5>
                <p>{data.company_name}</p>
            </Col>
            <Col md={3}>{data.category}</Col>
            <Col md={2}>{formatDistance(subDays(new Date(data.publication_date), 0), new Date(), { addSuffix: true })}</Col>
            <Col md={1} onClick={() => jobs.some(job => job._id === data._id) ? removeFromFavorite(data._id) : addFavJobs(data)}>
                <BsFlagFill className={jobs.some(job => job._id === data._id) ? 'followRed' : 'followWhite'} />
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob)
