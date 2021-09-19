import React, { useState } from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addSearchAction } from '../redux/actions'


const mapStateToProps = state => ({
    input: state.searchValue.input,
})

const mapDispatchToProps = dispatch => ({
    addSearchValue: (index) => dispatch(addSearchAction(index)),
})

const NavBarTop = ({ history, addSearchValue }) => {

    const [searchBank, setSearchBank] = useState('')


    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home"> <img src="https://remotive.io/remotive_website_static_pages/static/src/img/logo_remotive.png" alt="logo" className="navbarLogo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => history.push("/favorites")}>Favorite</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={searchBank}
                        onChange={e => setSearchBank(e.target.value.toLowerCase())}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                                addSearchValue(searchBank)
                            }
                        }}
                    />
                    <Button variant="outline-success" onClick={() => addSearchValue(searchBank)}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBarTop))
