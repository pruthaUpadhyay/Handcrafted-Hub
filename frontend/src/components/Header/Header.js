import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/HA-removebg-preview.png';
import { AuthContext } from '../../Context/AuthContext';
import { FaUserCircle } from 'react-icons/fa'; // Importing the avatar icon

const Header = () => {
    const { isAuth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        console.log("User logged out");
        logout();
        navigate('/login'); // Redirect to login page after logout
    };

    // Function to handle category navigation dynamically
    const handleMenNavigation = (category) => {
        navigate(`/category/men/${category}`);
    };
    const handleWomenNavigation = (category) => {
        navigate(`/category/women/${category}`);
    };
    const handleHomeNavigation = (category) => {
        navigate(`/category/home-decor/${category}`);
    };

    return (

        <header>
            <Navbar expand="md" className="custom-navbar shadow-sm">
                {/* <Container> */}
                    <Navbar.Brand as={Link} to="/" className="brand-name">
                        HANDCRAFTED HUB
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* MEN Dropdown */}
                            <NavDropdown title="MEN" id="men-nav-dropdown" className="custom-dropdown">
                                <NavDropdown.Item onClick={() => handleMenNavigation('Casual')}>
                                    Casual
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleMenNavigation('Traditional')}>
                                    Traditional
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleMenNavigation('Footwear')}>
                                    Footwear
                                </NavDropdown.Item>
                            </NavDropdown>

                            {/* WOMEN Dropdown */}
                            <NavDropdown title="WOMEN" id="women-nav-dropdown" className="custom-dropdown">
                                <NavDropdown.Item onClick={() => handleWomenNavigation('Kurti')}>
                                    Kurti
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleWomenNavigation('Saree')}>
                                    Saree
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleWomenNavigation('Jewellery')}>
                                    Jewelry
                                </NavDropdown.Item>
                            </NavDropdown>

                            {/* HOME & DECOR */}
                            <Nav.Link onClick={() => handleHomeNavigation('Home')} className="custom-link">
                                HOME & DECOR
                            </Nav.Link>
                        </Nav>

                        {/* User Avatar or Login */}
                        {isAuth ? (
                            <Dropdown align="end" className="user-dropdown">
                                <Dropdown.Toggle
                                    id="dropdown-avatar"
                                    variant="light"
                                    className="avatar-toggle"
                                >
                                    <FaUserCircle size={30} /> {/* Avatar Icon */}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/my-account">My Account</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <Button as={Link} to="/login" className="login-btn">
                                Login
                            </Button>
                        )}
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </header>
    );
};


export default Header;
