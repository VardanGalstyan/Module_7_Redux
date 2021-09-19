import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Jambotron() {
    return (
        <Container fluid id='jambotron'>
            <Container>
                <Row>
                    <Col md={10}>
                        <h2>Want to take day time naps?</h2>
                        <p>Remotive hand-screens 1,905 live remote jobs from 1,263 remote companies</p>
                    </Col>
                    <Col md={2} className='hideOnMobile'>
                        <img src="https://remotive.io/remotive_website_job/static/src/img/doge_title.png" alt="jamboImage" id='jamboImage' />
                    </Col>
                </Row>

            </Container>
        </Container>
    )
}

export default Jambotron
