import React from 'react';
import { Link } from 'react-router-dom';
import NavbarComp1 from '../components/NavbarComp1';
import FooterComp from '../components/FooterComp';


const HomePage = () => {


    return (
        <div className="h-100">
            <NavbarComp1 />
            <main className='m-0'>
                <section className="py-5 d-flex flex-column align-items-center justify-content-center home">
                    <div className="row g-4 container align-items-center">
                        <div className="col-12 s col-md-6">
                            <h1 className='display-4 fw-bold text-black'>Your favourite food brought
                                right to you.</h1>
                            <p className='text-black'>Download the PEX food app now on</p>

                            <a href="https://github.com/" className="btn rounded-pill col-8 col-md-4 p-0"><img src="/image/playstore.svg" className='img-fluid' alt="" /></a>
                        </div>
                        <div className="col-md-6">
                            <img src="/image/woman-phone.png" className='img-fluid w-100' alt="" />
                        </div>
                    </div>
                </section>

                <section className='py-5 text-center'>
                    <div className="container">
                        <div className="row p-5">
                            <h2>How the app works</h2>
                            <p>Easily order your meal in 3 simple steps</p>
                        </div>
                    </div>
                </section>

                <section className='py-5 text-center sec2'>
                    <div className="container">
                        <div className="row text-start align-items-center justify-content-center">
                            <div className="col-md-4">
                                <img src="/image/Group2.png" className='img-fluid w-100' alt="" />
                            </div>
                            <div className="col-md-6 align-items-center">
                                <h3 className="text-warning fw-bold m-0">Create an account</h3>
                                <h2 className='fw-bold text-black'>Create/login to an existing account to get started</h2>
                                <p className='lead fw-bold'>An account is created with your email and a desired password</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='py-5 text-center sec3'>
                    <div className="container">
                        <div className="row text-start align-items-center justify-content-center">
                            <div className="col-md-6 order-2">
                                <h3 className="text-warning fw-bold m-0">Find a meal</h3>
                                <h2 className='fw-bold text-black'>Shop for your favorites meal as e dey hot.</h2>
                                <p className='lead fw-bold'>Shop for your favorites from your neighbourhood amala & ewedu to the shawarma and ice cream you crave.</p>
                            </div>
                            <div className="col-md-4 order-md-2 ">
                                <img src="/image/Group1.png" className='img-fluid w-100' alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='py-5 text-center '>
                    <div className="container">
                        <div className="row text-start align-items-center justify-content-center">
                            <div className="col-md-4">
                                <img src="/image/Group3.png" className='img-fluid w-100' alt="logo" />
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-warning fw-bold m-0">Checkout</h3>
                                <h2 className='fw-bold text-black'>When you done, check outand get it delivered.</h2>
                                <p className='lead fw-bold'>Just sit back and relax as we bring yourfavourite meals to your doorsteps.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='py-5 '>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <img src="/image/image1.png" className='img-fluid w-100 m-0' alt="" />
                            </div>
                            <div className="col-md-6 bg-warning rounded-3 p-5">
                                <div className="container">
                                    <h2 className='fw-bold'>It’s all here, all in one app</h2>
                                    <p className='lead'>
                                        We have local teams dedicated to finding the best food in your city—whether that's
                                        spaghett, rice, or a really satisfying shawarma—so you can get the coolest
                                        restaurants brought right to you.
                                    </p>
                                    <Link to="/" className='btn bg-black rounded-pill px-4 text-warning btn-black fw-bold'>Get the app</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <FooterComp />
            </footer>
        </div>
    )
}

export default HomePage
