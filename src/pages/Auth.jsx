import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import NavbarComp2 from '../components/NavbarComp2';
import FooterComp from '../components/FooterComp';
import { Form } from 'react-bootstrap';


import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../DB/firebase';



const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    const signup = document.getElementById('form');
    signup.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const email = signup.email.value;
        const password = signup.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log("User Created",cred.user)
        })
    })

    const login = async () => {

    };

    const logout = async () => {

    };

    return (
        <div className='bg-light'>
            <NavbarComp2 className="h-25 sticky-top" />
            <Container className="container d-flex flex-column justify-content-center text-center py-5 auth">
                <h1 className='fw-bold'>{isSignup ? "Sign Up" : "Sign In"}</h1>
                <button onClick={switchMode} className='border-0 lead bg-transparent pointer my-2'>
                    {isSignup ? "Already have an account? Sign In" : "New to PEX? Sign Up"}
                </button>

                {isSignup ?
                    <Form className="container-fluid g-4 mx-auto aform" id="form">
                        <div className="row mb-3">
                            <div className="col-6">
                                <input 
                                type="text" 
                                name='firstname' 
                                className='bg-white border-0 w-100 form-control rounded' 
                                placeholder='First Name' />
                            </div>

                            <div className="col-6">
                                <input 
                                type="text" 
                                name='lastname' 
                                className='bg-white border-0 w-100 form-control rounded' 
                                placeholder='Last Name' />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="email"
                                    name='email'
                                    className='form-control bg-white border-0 rounded w-100'
                                    placeholder='Email'
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-3">
                                <input type="text" className='bg-white border-0 w-100 form-control rounded' placeholder='+234' />
                            </div>
                            <div className="col-9">
                                <input type="text" name='phone' className='bg-white border-0 w-100 form-control rounded' placeholder='Phone' />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="password"
                                    name='password'
                                    className='form-control bg-white border-0 rounded w-100'
                                    placeholder='Password'
                                />
                            </div>
                        </div>

                        <Button type="submit" className="btn bg-warning fw-bold form-control border-0 mb-3 rounded-pill">
                            Sign Up
                        </Button>
                    </Form>
                    :
                    <Form className="container-fluid g-4 mx-auto aform" id="form">
                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="email"
                                    name='email'
                                    className='form-control bg-white border-0 rounded w-100'
                                    placeholder='Email'/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="password"
                                    name='password'
                                    className='form-control bg-white border-0 rounded w-100'
                                    placeholder='Password'
                                />
                            </div>
                        </div>

                        <Button type="submit" onClick={login} className="btn bg-warning fw-bold form-control border-0 mb-3 rounded-pill">
                            Sign In
                        </Button>
                    </Form>
                }
            </Container>
            <FooterComp />
        </div>
    )
}

export default Auth
