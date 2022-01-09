import React, { useState } from 'react';
import { auth } from '../DB/firebase';
import { Button } from 'react-bootstrap';

import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {

    const [signinEmail, setSigninEmail] = useState("");
    const [signinPassword, setSigninPassword] = useState("");

    const signin = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                signinEmail,
                signinPassword
            )
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
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
                            setSigninEmail(event.target.value);
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
                            setSigninPassword(event.target.value);
                        }}
                    />
                </div>
            </div>

            <Button type="submit" onClick={signin} className="btn bg-warning fw-bold form-control border-0 mb-3 rounded-pill">
                Sign Up
            </Button>  
        </>
    )
}

export default Signin
