import React from 'react'
import './Navbar.css'
import {Navbar, Nav, Container} from 'react-bootstrap'

export default function MyNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Amy Wu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#extras">Extras</Nav.Link>
            <Nav.Link href="#extras">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
