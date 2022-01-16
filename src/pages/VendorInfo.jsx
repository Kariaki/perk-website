import React from 'react';
import NavbarComp2 from '../components/NavbarComp2';



const VendorInfo = (props) => {


    return (
        <div>
        <NavbarComp2/>
            <div className="row"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-3 mb-3 border-0 shadow">
                            <div className="row">
                                <img src="" alt="" />
                            </div>
                            <div className="row">
                                <h3 className='fw-bold'>vendor</h3>
                                <p className="text-muted">4.5</p>
                                <p className="text-muted">no1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h3 className="fw-bold">Cuisuines</h3>
                </div>
            </div> 
        </div>
    )
}

export default VendorInfo
