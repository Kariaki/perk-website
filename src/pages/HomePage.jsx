import React from 'react';
import {
    Container,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import { HiOutlineSearch } from 'react-icons/hi';

import { CardComp } from '../components/CardComp';
import NavbarComp1 from '../components/NavbarComp1';
import FooterComp from '../components/FooterComp';

import { cards } from '../components/list';


const HomePage = () => {

    const card = cards.map((card, index) => {
        return (
            <CardComp
                key={index}
                {...card}
            />
        )
    })

    return (
        <div className="h-100">
            <main className='m-0'>
                <NavbarComp1/>
                <section className="mb-3  d-flex align-items-center justify-content-center home">
                    <div className="overlay container-fluid d-flex align-items-center justify-content-center">
                        <div className="row justify-content-center">
                        <h1 className='display-1 fw-bold text-light w-75 text-center'>Your Favorite food, brought right to you.</h1>
                            <div className="col-md-5 bg-white rounded-pill py-1 px-2 my-2 m-lg-50 w-sm-50 mt-5">
                                <Form className="d-flex align-items-center">
                                    <HiOutlineSearch className='fw-bold fs-1' />
                                    <FormControl
                                        type="search"
                                        placeholder="Search for Meals, Drinks and Resturants"
                                        className="border-0"
                                        aria-label="Search"
                                    />
                                    <Button variant="warning rounded-pill px-3">Search</Button>
                                </Form>
                            </div>
                    </div>
                    </div>
                </section>

                <section className='py-5'>
                    <div className="container">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button className="nav-link rounded-pill active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="nav-link rounded-pill" id="pills-dessert-tab" data-bs-toggle="pill" data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert" aria-selected="false">Dessert</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="nav-link rounded-pill" id="pills-chicken-tab" data-bs-toggle="pill" data-bs-target="#pills-chicken" type="button" role="tab" aria-controls="pills-chicken" aria-selected="false">Chicken</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="nav-link rounded-pill" id="pills-salad-tab" data-bs-toggle="pill" data-bs-target="#pills-salad" type="button" role="tab" aria-controls="pills-salad" aria-selected="false">Salads</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="nav-link rounded-pill" id="pills-drink-tab" data-bs-toggle="pill" data-bs-target="#pills-drink" type="button" role="tab" aria-controls="pills-drink" aria-selected="false">Drinks</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button className="nav-link rounded-pill" id="pills-continential-tab" data-bs-toggle="pill" data-bs-target="#pills-continential" type="button" role="tab" aria-controls="pills-continential" aria-selected="false">Continential</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
                                <div className="container">
                                    <div className="row g-4">
                                        {card}
                                        {card}
                                        {card}
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab">
                                <div className="container">
                                    <div className="row g-4">
                                        {card}
                                        {card}
                                        {card}
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-chicken" role="tabpanel" aria-labelledby="pills-chicken-tab">
                                <div className="container">
                                    <div className="row g-4">
                                        {card}
                                        {card}
                                        {card}
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-salad" role="tabpanel" aria-labelledby="pills-salad-tab">
                                <div className="container">
                                    <div className="row g-4">
                                        {card}
                                        {card}
                                        {card}
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-drink" role="tabpanel" aria-labelledby="pills-drink-tab">
                                <div className="container">
                                    <div className="row g-4">
                                        {card}
                                        {card}
                                        {card}
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-continential" role="tabpanel" aria-labelledby="pills-continential-tab">
                                <div className="container">
                                    <div className="row g-4">
                                        {card}
                                        {card}
                                        {card}
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </section>

                <section className='bg-warning py-5'>

                </section>
            </main>
            <FooterComp/>
        </div>
    )
}

export default HomePage
