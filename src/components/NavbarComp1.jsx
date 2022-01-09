import React from 'react';
import { Link } from 'react-router-dom';


import {
    Navbar,
    Container,
    Nav,
    Form,
    Button,
    Badge
} from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';

const NavbarComp1 = () => {

    const user = null;

    return (
        <div className="position-sticky sticky-top">
            <Navbar className="navbar p-0 h-25 sticky-top shadow t-0" bg="light" expand="lg">
                <Container className="container-fluid px-md-5">
                    <Navbar.Brand href="#" className='text-warning fs-1 fw-bold'>PEX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto me-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/meals" className="fw-bold text-decoration-none me-3 text-dark">MEALS</Link>
                            <Link to="/vendors" className="fw-bold text-decoration-none me-3 text-dark">VENDORS</Link>
                        </Nav>
                        <Form className="d-flex">
                            {user ? (
                                <div className=''>
                                    <div className="p-3 rounded-pill bg-warning">
                                        {user.result.name.charAt[0]}
                                    </div>
                                </div>
                            ) : (
                                <Link to="/auth" variant="warning" className="btn bg-warning rounded-pill me-2"><FaUserAlt /></Link>
                            )}

                            <Button variant="warning" className="rounded-pill">
                                <IoMdCart /> <Badge bg="transparent" className="text-dark fw-bold">0</Badge>
                                <span className="visually-hidden">unread messages</span>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp1
