import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Image/logo.jpeg';
import {Link} from 'react-router-dom'
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className=" p-3 py-3 pt-2"style={{backgroundColor:"black"}}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ height: '4rem', width: '4rem' }} />
          <span className='name text-info ms-3  fw-bold' style={{ fontSize: '1rem' }}>VXEQ INFRA FACILITIES PVT LTD</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: 'auto' }}>
            <Link className='nav nav1 active text-white fw-bold text-decoration-none ms-4 ' style={{ marginLeft: '1rem' }} to="/">HOME</Link>
            <Link className='nav text-white fw-bold text-decoration-none ms-4' to="/about">ABOUT US</Link>
            <Link className='nav text-white fw-bold text-decoration-none ms-4 ' to="/services">SERVICES</Link>
            <Link className='nav text-white fw-bold text-decoration-none ms-4 ' to="/contact">CONTACT</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
