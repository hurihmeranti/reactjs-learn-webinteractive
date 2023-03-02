import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");

 return(
   <Navbar expand ="lg">
   <Container>
   <Navbar.Brand href="#home">
        <img src={""} alt="logo company" />
   </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
   </Navbar.Toggle>
   <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#about">About</Nav.Link>
    <Nav.Link href="#Project">Project</Nav.Link>   
    </Nav>
    <span className="navbar-text">
        <div className="social-icon">
            <a href="#"><img src={""} alt=""/></a>
            <a href="#"><img src={""} alt=""/></a>
            <a href="#"><img src={""} alt=""/></a>
        </div>
            <button className="vvd" onClick={() => console.log("connect")}></button>
    </span>
   </Navbar.Collapse>
   </Container>
   </Navbar>
 );
};