import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Accordion } from 'react-bootstrap';

import { GrFacebookOption } from 'react-icons/gr';
import { SiInstagram } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const FooterComp = () => {
    return (
        <div>
            <footer className='bg-dark py-4 footer1 d-md-block'>
                <Container>
                    <div className="row">
                        <div className="col-md">
                            <h5 className="text-warning">Get To Know Us</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About Us</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Contact Us</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Sponsorship</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Accessibility</Link></li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h5 className="text-warning">Let Us Help You</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Account Details</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Order History</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Help</Link></li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h5 className="text-warning">Doing Business</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Become a Pexer</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Be a Partner Restaurant</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h2 className="display-1 fw-bold text-warning m-0 p-0">PEX</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <p className='text-muted'>Terms of Service</p>
                        </div>
                        <div className="col">
                            <p className='text-muted'>Privacy</p>
                        </div>
                        <div className="col">
                            <p className='text-muted'>Notice at Collection</p>
                        </div>
                        <div className="col">
                            <p className='text-muted'>&copy;2021 PEX Global</p>
                        </div>
                        <div className="col-3 d-flex">
                            <GrFacebookOption className="text-warning fs-3 me-3" />
                            <SiInstagram className="text-warning fs-3 me-3" />
                            <BsWhatsapp className="text-warning fs-3 me-3" />
                            <BsTwitter className="text-warning fs-3 me-3" />
                        </div>
                    </div>
                </Container>

            </footer>
            <footer className='container-fluid d-md-none bg-dark py-4 text-warning text-center'>
                <div className="col">
                    <h2 className="display-1 fw-bold text-warning m-0 p-0">PEX</h2>
                </div>
                <Accordion className="text-warning">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Get To Know Us</Accordion.Header>
                        <Accordion.Body className="bg-dark">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About Us</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Contact Us</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Sponsorship</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Accessibility</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header >Let Us Help You</Accordion.Header>
                        <Accordion.Body className="bg-dark">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Account Details</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Order History</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Help</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="fw-bold">Doing Business</Accordion.Header>
                        <Accordion.Body className="bg-dark">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Become a Pexer</Link></li>
                                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Be a Partner Restaurant</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="row">
                    <div className="col my-3">
                        <GrFacebookOption className="text-warning fs-3 me-3" />
                        <SiInstagram className="text-warning fs-3 me-3" />
                        <BsWhatsapp className="text-warning fs-3 me-3" />
                        <BsTwitter className="text-warning fs-3 me-3" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <p className='text-warning'>Terms of Service</p>
                    </div>
                    <div className="col-md">
                        <p className='text-warning'>Privacy</p>
                    </div>
                    <div className="col-md">
                        <p className='text-warning'>Notice at Collection</p>
                    </div>
                    <div className="col-md">
                        <p className='text-warning'>&copy;2021 PEX Global</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterComp
