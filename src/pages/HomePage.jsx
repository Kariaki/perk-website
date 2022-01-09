import React from 'react';
import {CardComp} from '../components/CardComp';
import NavbarComp1 from '../components/NavbarComp1';
import FooterComp from '../components/FooterComp';

import { Container } from 'react-bootstrap';


const HomePage = () => {
    return (
        <div className="h-100">
            <NavbarComp1/>
            <main>
                <section className="mb-3 container-fluid vh-100 d-flex align-items-center justify-content-center">
                    <div className="row">
                        <h1 className='display-4 fw-bold'>Your Favorite food, brought right to you.</h1>
                    </div>
                </section>

                <Container>
                    <div className="row d-flex flex-md-row g-4">
                        <CardComp/>
                    </div>

                </Container>
            </main>
            <FooterComp/>
        </div>
    )
}

export default HomePage
