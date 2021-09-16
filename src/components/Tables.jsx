import React from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col, Container, Table } from 'react-bootstrap'
import { MdFavorite } from 'react-icons/md'
import { removeJobs } from '../redux/job/jobActions'
import { addJobs } from '../redux/job/jobActions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    addFavJobs: (jobToAdd) => dispatch(addJobs(jobToAdd)),
})


const Tables = (props) => {

    return (
        <Container className="mt-5">
            <Row>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>#...</option>
                                </Form.Control></th>
                            <th>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Job Title...</option>
                                    <option value='Ascending'> sort by ASC </option>
                                    <option value='Descending'> sort by DESC</option>
                                </Form.Control>
                            </th>
                            <th>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Company Name...</option>
                                    <option value='Finance'> Finance </option>
                                    <option value='Human Resources'> Human Resources</option>
                                </Form.Control>
                            </th>
                            <th>
                                <Form.Control as="select" defaultValue="Choose..." onChange={e => props.setCategoryValue(e.target.value)}>
                                    <option>Category...</option>
                                    <option value='Finance'> Finance </option>
                                    <option value='Human Resources'> Human Resources</option>
                                    <option value='Writing'>Writing</option>
                                    <option value='DevOps'>DevOps/Sysadmin</option>
                                    <option value='Data'>Data</option>
                                    <option value='Business'>Business</option>
                                    <option value='Product'>Product</option>
                                    <option value='Sales'>Sales</option>
                                    <option value='Marketing'>Marketing</option>
                                    <option value='Design'>Design</option>
                                    <option value='Customer Service'>Customer Service</option>
                                </Form.Control>
                            </th>
                            <th>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Job Type...</option>
                                    <option value='Finance'> Finance </option>
                                    <option value='Human Resources'> Human Resources</option>
                                </Form.Control>
                            </th>
                            <th>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Location...</option>
                                    <option value='Finance'> Finance </option>
                                    <option value='Human Resources'> Human Resources</option>
                                </Form.Control>
                            </th>
                            <th>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Publication Date...</option>
                                    <option value='Finance'> Finance </option>
                                    <option value='Human Resources'> Human Resources</option>
                                </Form.Control>
                            </th>
                            <th>
                                Save
                            </th>
                        </tr>
                    </thead>
                    {props.data && props.data.map((user, i) => {
                        return <tbody key={user._id}>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{user.title}</td>
                                <td>{user.company_name}</td>
                                <td>{user.category}</td>
                                <td>{user.job_type}</td>
                                <td>{user.candidate_required_location}</td>
                                <td>{user.publication_date.split("T")[0]}</td>
                                <td onClick={() => {

                                    // props.setFavoriteJob([...props.favoriteJob, user]
                                    props.addFavJobs(user)

                                }}><MdFavorite className={props.favoriteJob.some(job => job._id === user._id) ? 'followRed' : 'followWhite'} /></td>
                            </tr>
                        </tbody>
                    })
                    }
                </Table>
            </Row>
            <Row className='justify-content-center my-3'>
                <Col md={4} className='d-flex justify-content-between'>
                    <span onClick={() => props.setSkip(0)}>
                        First
                    </span>
                    <span onClick={() => props.setSkip(props.skipValue >= 10 ? props.skipValue - 10 : props.skipValue + 0)}>
                        Previous
                    </span>
                    <span onClick={() => props.setSkip(parseInt(props.skipValue) + 10)}>
                        Next
                    </span>
                    <span onClick={() => props.setSkip(1000)}>
                        Last
                    </span>
                </Col>
            </Row>
        </Container >
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Tables)