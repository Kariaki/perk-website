import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
const NavbarComp1 = () => {

    return (
        <div className="">
            <Navbar className="navbar p-0 h-25" bg="transparent" expand="lg">
                <Container className="container-fluid px-md-5">
                    <Navbar.Brand href="#" className='text-warning fs-1 fw-bold'>PEX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto me-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className="text-decoration-none me-3 text-black">About</Link>
                            <Link to="/" className="text-decoration-none me-3 text-black">Vendors</Link>
                            <Link to="/" className="text-decoration-none me-3 text-black">Terms</Link>
                            <Link to="/" className="text-decoration-none me-3 text-black">PrivacyPolicy</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp1
