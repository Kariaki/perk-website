import React from 'react';
import { Card } from 'react-bootstrap';


export const CardComp = (props) => {
    return (
        <>
            <div className="col-md-6 col-lg-3">
                <Card className="shadow rounded">
                    <img src={props.src} alt={props.title} w-100 />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text className="d-flex">
                            <p className="text-muted me-2">{props.price}</p>
                            <p className="text-muted">{props.vendor}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}


export const CardComp2 = () => {
    return (
        <>
            <div className="card mb-3 border-0 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export const CardComp3 = (props) => {
    return (
        <>
            <div className="col-md-3">
                <div className="card p-3 mb-3 border-0 shadow">
                    <div className="row justify-content-center text-center border-bottom">
                        <h3 className="avatar">JD</h3>
                        <h6>{props.name}</h6>
                    </div>
                    <div className="row justify-content-center text-center border-bottom">
                        <small className='text-warning'>Number</small>
                        <p>{props.number}</p>
                    </div>
                    <div className="row justify-content-center text-center border-bottom">
                        <small className='text-warning'>Email</small>
                        <p>{props.email}</p>
                    </div>
                    <div className="row justify-content-center text-center">
                        <small className='text-warning'>Address</small>
                        <p>{props.address}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export const CardComp4 = (props) => {
    return (
        <>
            <div className="col-md-3">
                <div className="card p-3 mb-3 border-0 shadow">
                    <div className="row">

                    </div>
                    <div className="row">
                        <p>{props.vendorName}</p>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-4 border border-2 border-warning rounded-3 text-center p-1  align-items-center d-flex flex-column">
                            <small className='m-0'>Menu</small>
                            <p className="bg-warning m-0 w-50 p-1 rounded-3">{props.numberOfMenu}</p>
                        </div>
                        <div className="col-4 border border-2 border-warning rounded-3 text-center p-1  align-items-center d-flex flex-column">
                            <small className='m-0 p-0'>Meals</small>
                            <p className="bg-warning m-0 w-50 p-1 rounded-3">{props.numberOfMeals}</p>
                        </div>
                        <div className="col-4 border border-2 border-warning rounded-3 text-center p-1  align-items-center d-flex flex-column">
                            <small className='m-0'>Orders</small>
                            <p className="bg-warning m-0 w-50 p-1 rounded-3">{props.numberOfOrders}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export const CardComp5 = (props) => {
    return (
        <>
            <div className="col-md-3">
                <div className="card p-3 mb-3 border-0 shadow">
                    <div className="row">
                        <img src={props.src} alt="" />
                    </div>
                    <div className="row">
                        <p>{props.vendorName}</p>

                        <p className="text-muten">{props.rating}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export const CardComp6 = (props) => {
    return (
        <>
            
        </>
    )
}

