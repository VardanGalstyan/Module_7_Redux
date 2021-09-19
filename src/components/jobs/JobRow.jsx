import React from 'react'
import { Container } from 'react-bootstrap'
import SingleJob from './SingleJob'
import { connect } from 'react-redux'
import { SolarSystemLoading } from 'react-loadingg';

const mapStateToProps = state => ({
    data: state.dataBase.stock.data,
    loading: state.dataBase.loading,
    // skip: state.offset.skip,
    // input: state.searchValue.input,
    // value: state.category.value,
})

const mapDispatchToProps = dispatch => ({
    // addFavJobs: (jobToAdd) => dispatch(addToFavoriteActionThunk(jobToAdd)),
    // removeFromFavorite: (index) => dispatch(removeJobs(index)),
    // addOffset: (index) => dispatch(addOffsetAction(index)),
    // addCategory: (index) => dispatch(addCategoryAction(index))

})

function JobRow({data, loading}) {
    return (
        <Container id='joblist'>
            {
                loading && <SolarSystemLoading/>
            }
            {
                data && data.map(job => <SingleJob data = {job} /> )
            }
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps )(JobRow)
