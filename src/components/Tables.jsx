import React from 'react'
import { Container, Table } from 'react-bootstrap'

export default function Tables({ data }) {

    return (
        <Container className="mt-5">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Company Name</th>
                        <th>Category</th>
                        <th>Job Type</th>
                        <th>Location</th>
                        <th>Publication Date</th>
                    </tr>
                </thead>
                {data && data.map((user, i) => {

                    return <tbody key={user._id}>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{user.title}</td>
                            <td>{user.company_name}</td>
                            <td>{user.category}</td>
                            <td>{user.job_type}</td>
                            <td>{user.candidate_required_location}</td>
                            <td>{user.publication_date.split("T")[0]}</td>
                        </tr>
                    </tbody>
                })
                }
            </Table>
        </Container>
    )
}
