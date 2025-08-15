import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container fluid className='mx-md-5'>
                <div className='px-md-4 py-2'>
                    <img style={{ height: "40px" }} src="/logo.png" alt="" />
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="mx-4 fs-5" href="#home" onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link className="mx-4 fs-5" href="#link" onClick={() => navigate("/dashboard")}>Students</Nav.Link>
                        <Nav.Link className="mx-4 fs-5" href="#link">Contact</Nav.Link>
                    </Nav>
                    <div className='d-flex gap-4'>
                    <Button style={{ width: "140px" }} variant="outline-secondary">Login</Button>
                    <Button style={{ width: "140px" }} variant="outline-secondary">Register</Button>
                </div>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default Header