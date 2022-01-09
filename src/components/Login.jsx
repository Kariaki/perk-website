import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../DB/firebase'; 

import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <input
                        type="email"
                        name='email'
                        className='form-control bg-white border-0 rounded w-100'
                        placeholder='Email'
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }} />
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
                            setLoginPassword(event.target.value);
                        }}
                    />
                </div>
            </div>
            
            <Button type="submit" onClick={login} className="btn bg-warning fw-bold form-control border-0 mb-3 rounded-pill">
                Sign In
            </Button>
        </>
    )
}

export default Login
