import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'


const FavoriteList = ({jobs}) => {
    return (

        <Container>
            <Row>
                {jobs && jobs.map(job => {
                    return <Card className="text-center mt-3">
                        <Card.Header>{job.company_name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Text>
                                {job.candidate_required_location}
                            </Card.Text>
                            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                            <Button variant="primary" onClick={() => window.open(job.url)}>Surf Company Page</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">{job.job_type}</Card.Footer>
                    </Card>
                })
                }
            </Row>
        </Container>
    )
}



export default withRouter(FavoriteList)