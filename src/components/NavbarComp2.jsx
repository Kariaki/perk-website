import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
    Badge
} from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiRightArrowAlt } from 'react-icons/bi';

const NavbarComp2 = () => {
    return (
        <div className="position-sticky sticky-top">
            <Navbar className="p-0" bg="dark" expand="lg">
                <Container className="container-fluid px-md-5">
                    <Navbar.Brand href="/" className='text-warning fs-1 fw-bold'>PEX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto text-white me-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/meals" className="fw-bold text-white mx-lg-3 text-decoration-none">MEALS</Link>
                            <Link to="/vendors" className="fw-bold text-white text-decoration-none">VENDORS</Link>
                        </Nav>
                        <div className="bg-white rounded-pill p-1 my-2 m-lg-auto w-sm-50">
                            <Form className="d-flex align-items-center">
                                <HiOutlineSearch className='fw-bold fs-1'/>
                                <FormControl
                                    type="search"
                                    placeholder="Search for Meals, Drinks and Resturants"
                                    className="border-0"
                                    aria-label="Search"
                                />
                                <Button variant="warning rounded-pill"><BiRightArrowAlt className="fs-4"/></Button>
                            </Form>
                        </div>
                        <Form className="d-flex my-3">
                            <Link to="/auth" variant="warning" className="btn btn-warning rounded-pill me-2"><FaUserAlt /></Link>
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

export default NavbarComp2
