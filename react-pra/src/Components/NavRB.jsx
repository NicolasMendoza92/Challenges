import React from 'react'
import { Navbar,Form,Nav,FormControl,Button} from 'react-bootstrap'

const NavRB = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand>Rick and Morty </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Episodies</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default NavRB
