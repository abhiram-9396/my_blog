import React, { Component } from 'react';
import {Nav, Container, Navbar} from 'react-bootstrap'
import '../bootstrap.min.css';

const Navbardark = () => {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-3 navbar'>
          <Container>
            <Navbar.Brand href="/Home">ABHIRAM GATREDDI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="/skills">Skills</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export class Header extends Component {
    render() {
      return (
        <div>
          <Navbardark />
        </div>
      )
    }
  }
  
  export default Header
