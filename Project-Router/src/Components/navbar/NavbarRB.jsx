
import { Container,Navbar,Nav} from 'react-bootstrap';

export const NavbarRB = (props) => {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={()=> {props.setSection('memes')}} href="#home">Home</Nav.Link>
        <Nav.Link onClick={()=> {props.setSection('login')}} href="#link">Login</Nav.Link>
        <Nav.Link onClick={()=> {props.setSection('perfil')}} href="#link">Perfil</Nav.Link>
        <Nav.Link onClick={()=> {props.setSection('admin')}} href="#link">Admin</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

