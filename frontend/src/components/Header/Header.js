import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/HA-removebg-preview.png';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        console.log("User logged out");
        logout();
    };

    return (
        <header>
            <Navbar bg="light" expand="md" className="shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}  // Your logo
                            alt="Logo"
                            className="logo"
                            style={{ width: '150px' }}  // Adjust the size of the logo as per your needs
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="MEN" id="men-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/men/casual">Casual</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/men/traditional">Traditional</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/men/jewelry">Jewelry</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="WOMEN" id="women-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/women/casual">Casual</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/women/traditional">Traditional</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/women/jewelry">Jewelry</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="KIDS" id="kids-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/kids/casual">Casual</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/kids/traditional">Traditional</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to="/home-decor">HOME & DECOR</Nav.Link>
                            <Nav.Link as={Link} to="/crafts">CRAFTS</Nav.Link>
                        </Nav>

                        <Form className="d-flex me-3">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        {isAuth ? (
                            <>
                                <Nav.Link as={Link} to="/account">
                                    <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
                                </Nav.Link>
                                <Button variant="outline-danger" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <Button variant="primary" as={Link} to="/login">
                                Login
                            </Button>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
  