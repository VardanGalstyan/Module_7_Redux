import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'
import { useState } from 'react'

const NavBarTop = ({ setSearch, history }) => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"> <img src="https://www.kindpng.com/picc/m/133-1337806_job-vector-seeker-job-logo-magnifying-glass-png.png" alt="logo" className="navbarLogo" /></Navbar.Brand>
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
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                console.log(e.key);
                                setSearch(searchValue)
                            }
                        }}
                    />
                    <Button variant="outline-success" onClick={() => setSearch(searchValue)}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(NavBarTop)
