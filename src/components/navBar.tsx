import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className='n1'>
      <Navbar.Brand href="#"><h4>News Website</h4></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <NavDropdown title="Different Domains" id="navbarDropdown">
            <NavDropdown.Item href="#">Politics</NavDropdown.Item>
            <NavDropdown.Item href="#">Sports</NavDropdown.Item>
            <NavDropdown.Item href="#">Other News</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link disabled href="#">Post Your News</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
