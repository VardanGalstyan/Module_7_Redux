import React, { useState } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'


export default function FavoriteList({ jobs }) {
    return (

        <Container>
            <Row>
                {jobs && jobs.map(job => {
                    return <Card className="text-center">
                        <Card.Header>{job.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{job.company_name}</Card.Title>
                            <Card.Text>
                                {job.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">{job.publication_date}</Card.Footer>
                    </Card>
                })
                }
            </Row>
        </Container>
    )
}
