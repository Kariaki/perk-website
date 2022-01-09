import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavbarComp2 from '../components/NavbarComp2';
import FooterComp from '../components/FooterComp';
import { Form } from 'react-bootstrap';


import Login from '../components/Login';
import Signin from '../components/Signin';


const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }



    const login = async () => {

    };

    const logout = async () => {

    };

    return (
        <div className='bg-light'>
            <NavbarComp2 className="h-25 sticky-top" />
            <Container className="container d-flex flex-column justify-content-center text-center py-5">
                <h1 className='fw-bold'>{isSignup ? "Sign Up" : "Sign In"}</h1>
                <button onClick={switchMode} className='border-0 lead bg-transparent pointer my-2'>
                    {isSignup ? "Already have an account? Sign In" : "New to PEX? Sign Up"}
                </button>
                <Form className="container-fluid g-4 mx-auto aform" id="form">
                    {isSignup ?
                        <Signin />
                        :
                        <Login />
                    }
                </Form>
            </Container>
            <FooterComp />
        </div>
    )
}

export default Auth
