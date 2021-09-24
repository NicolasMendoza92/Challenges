
import { Container,Navbar,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarRB = ({user}) => {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
        <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>
        <Nav.Link as={NavLink} to="/perfil" >Perfil</Nav.Link>
        {/* cuando un usuario se logea, su prop role es igual a admin => se muestra el nav link admin */}
        {user.role === 'admin' && <Nav.Link as={NavLink} to="/admin" >Admin</Nav.Link>}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

