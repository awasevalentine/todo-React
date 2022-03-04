import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './navbar.css';
const NavbarPage = () => {
    return ( 
        <div>
            <Navbar expand="lg" className="navbar-wrapper">
                <Container>
                    <Navbar.Brand href="/"><h5 className="brand-name">Todo</h5></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto contact-about">
                        <Nav.Link href='/todos'><h5>About</h5></Nav.Link>
                        <Nav.Link href="#link"><h5>Contact</h5></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default NavbarPage;