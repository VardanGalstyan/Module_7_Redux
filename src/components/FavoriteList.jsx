import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { removeJobs } from '../redux/actions'

const mapStateToProps = state => ({
    jobs: state.favorite.jobs
})

const mapDispatchToProps = dispatch => ({
    removeFromFavorite: (index) => dispatch(removeJobs(index))
})


const FavoriteList = ({ jobs, removeFromFavorite }) => {
    return (

        <Container id='favoriteList'>
            {
                jobs.length === 0 ?
                    <Row>
                        <img src="http://images6.fanpop.com/image/photos/39700000/Finn-zootopia-39720177-941-1062.png" alt="Finnick" />
                        <h3>No item has yet been selected!</h3>
                    </Row> :
                    <Row>
                        {jobs && jobs.map((job, i) => {
                            return <Card className="text-center mt-3">
                                <Card.Header>{job.company_name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{job.title}</Card.Title>
                                    <Card.Text>
                                        {job.candidate_required_location}
                                    </Card.Text>
                                    <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                                    <div className='d-flex justify-content-between'>
                                        <Button variant="primary" onClick={() => window.open(job.url)}>Surf Company Page</Button>
                                        <Button variant="primary" onClick={() => removeFromFavorite(job._id)}>Remove</Button>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="text-muted">{job.job_type}</Card.Footer>
                            </Card>
                        })
                        }
                    </Row>

            }
        </Container>
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FavoriteList))