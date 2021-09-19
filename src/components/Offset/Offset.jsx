import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addOffsetAction } from '../../redux/actions'

const mapStateToProps = state => ({

    skip: state.offset.skip,
    data: state.dataBase.stock.data,
})

const mapDispatchToProps = dispatch => ({
    addOffset: (index) => dispatch(addOffsetAction(index)),

})

function Offset({ addOffset, skip, data }) {
    return (
        <>
            { data && 
                <Container id='offset'>
                    <Row className='justify-content-center my-3'>
                        <Col md={4} className='d-flex justify-content-between'>
                            <span onClick={() => addOffset(0)}>
                                First
                            </span>
                            <span onClick={() => addOffset(skip >= 10 ? skip - 10 : skip + 0)}>
                                Previous
                            </span>
                            <span onClick={() => addOffset(parseInt(skip) + 10)}>
                                Next
                            </span>
                            <span onClick={() => addOffset(1000)}>
                                Last
                            </span>
                        </Col>
                    </Row>
                </Container>

            }
        </>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Offset)
