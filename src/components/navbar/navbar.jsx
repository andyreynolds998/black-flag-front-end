import React, { Component } from 'react';
import './navbar.css';

//components
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';



class Navigator extends React.Component {
    render() {
        return <Navbar bg="dark" variant='dark' expand="xl">
            <Container>
                <Navbar.Brand className="nav" href="#home">
                    <img id='nav-logo'
                        src='/logo.png'
                        width='40'
                        height='40'
                    />
                    Black Flag Gunfighter Academy </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link id='nav-link' href="#home">Courses</Nav.Link>
                        <Nav.Link id='nav-link' href="#link">FAQ</Nav.Link>
                        <Nav.Link href='#Contact'>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    }
}

export default Navigator;

// <NavDropdown title="Dropdown" id="basic-nav-dropdown">
// <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
// </NavDropdown>