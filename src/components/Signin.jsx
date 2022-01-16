import React, { useState } from 'react';
import { auth } from '../DB/firebase';
import { Button } from 'react-bootstrap';


const Signin = () => {

    const [signinEmail, setSignInEmail] = useState("");
    const [signinPassword, setSignInPassword] = useState("");

    const signIn = () => {
        createUserWithEmailAndPassword(auth, signinEmail, signinPassword)
        .then((userCred) => {
            console.log('User Created', userCred.user);
            signIn.reset();
        })
        .catch((err) => {
            console.log(err.message);
        }) 
    };

    return (
        <>
            <div className="row mb-3">
                <div className="col-6">
                    <input type="text" name='firstname' className='bg-white border-0 w-100 form-control rounded' placeholder='First Name' />
                </div>
                <div className="col-6">
                    <input type="text" name='lastname' className='bg-white border-0 w-100 form-control rounded' placeholder='Last Name' />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <input
                        type="email"
                        name='email'
                        className='form-control bg-white border-0 rounded w-100'
                        placeholder='Email'
                        onChange={(event) => {
                            setSignInEmail(event.target.value);
                        }} />
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
                        onChange={(event) => {
                            setSignInPassword(event.target.value);
                        }}
                    />
                </div>
            </div>

            <Button type="submit" onClick={signIn} className="btn bg-warning fw-bold form-control border-0 mb-3 rounded-pill">
                Sign Up
            </Button>
        </>
    )
}

export default Signin
