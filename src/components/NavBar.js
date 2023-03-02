import { useState, useEffect} from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        } 

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onscroll);
    }, []);


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
   <Navbar expand ="lg" className={scrolled ? "scrolled": ""}>
   <Container>
   <Navbar.Brand href="#home">
        <img src={""} alt="logo company" />
   </Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
   </Navbar.Toggle>
   <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
    <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("about")}>About</Nav.Link>
    <Nav.Link href="#Project" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("project")}>Project</Nav.Link>   
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