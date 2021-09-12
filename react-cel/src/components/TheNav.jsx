import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';


const TheNav = () => {
    return (
        <Navbar fluid bg="light" variant="light" className="mb-2">
            <Container>
                <img className="logo-nav" src="https://es-la.facebookbrand.com/wp-content/uploads/2016/05/M.png" alt="" />
                <Navbar.Brand className="ms-2">Designo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="me-4">Our Company</Nav.Link>
                        <Nav.Link className="me-4">Locations</Nav.Link>
                        <Nav.Link className="me-4">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TheNav
