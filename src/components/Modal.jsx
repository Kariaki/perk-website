import React from 'react';


export const Modal1 = () => {

    return (
        <>
            <div className="modal custom fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0 d-flex flex-column justify-content-start">
                            <button type="button" className="btn-close me-auto ms-0" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h5 className="modal-title me-auto " id="exampleModalLabel">Your Cart</h5>
                        </div>
                        <div className="modal-body ">
                            
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-warning form-control rounded-pill text-white">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export const Modal2 = () => {
    return (
        <>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header align-items-center border-0">
                        <div className="col-8">
                                <h5 className="modal-title m-0" id="exampleModalLabel">Item Name</h5>
                                <p className='m-0'></p>
                                <p className='m-0'><small>vendor name</small></p>
                        </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer bg-dark">
                        {/* <div className="d-flex justify-content-between w-50 h-25">
                                <button type="button" className="btn btn-warning rounded-circle avatar" data-bs-dismiss="modal">+</button>

                                <button type="button" className="btn btn-warning rounded-circle avatar" data-bs-dismiss="modal">-</button>
                        </div> */}
                            <button type="button" className="btn btn-warning rounded-pill text-white ms-5">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



        
