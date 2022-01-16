import React from 'react'
import NavbarComp2 from '../components/NavbarComp2'

import { vendors } from '../components/list';
import { CardComp5 } from '../components/CardComp';
import FooterComp from '../components/FooterComp';
import { Link } from 'react-router-dom';


const VendorsPage = () => {
    const vendor = vendors.map((vendor, index) => {
        return (
            <CardComp5
                key={index}
                {...vendor}
            />
        )
    })
    return (
        <>
            <NavbarComp2/>
            <section className='py-2'>
                <div className="container">
                    <h3>Vendors within yenagoa</h3>
                    <Link to="/vendorinfo">
                        <div className="row g-4 mt-2">
                            {vendor}
                            {vendor}
                            {vendor}
                        </div>
                    </Link>
                </div>
            </section>
            <FooterComp/>
        </>
    )
}

export default VendorsPage
