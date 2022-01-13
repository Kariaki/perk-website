import React from 'react';
import NavbarComp2 from '../components/NavbarComp2';
import { CardComp } from '../components/CardComp';

import { cards } from '../components/list';
import FooterComp from '../components/FooterComp';

const MealsPage = () => {

    const card = cards.map((card, index) => {
        return (
            <CardComp
                key={index}
                {...card}
            />
        )
    })

    return (
        
        <>   
            <NavbarComp2 />
            <section className='py-2'>
                <div className="container">
                <h3>No hassle, get your meal without leaving your home</h3>
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
                    <div class="tab-content border-top py-4" id="pills-tabContent">
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
            <FooterComp/>
        </>
    )
}

export default MealsPage
